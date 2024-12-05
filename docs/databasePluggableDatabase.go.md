# `databasePluggableDatabase` Submodule <a name="`databasePluggableDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePluggableDatabase <a name="DatabasePluggableDatabase" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database oci_database_pluggable_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabase(scope Construct, id *string, config DatabasePluggableDatabaseConfig) DatabasePluggableDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig">DatabasePluggableDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig">DatabasePluggableDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putPdbCreationTypeDetails">PutPdbCreationTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetContainerDatabaseAdminPassword">ResetContainerDatabaseAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetConvertToRegularTrigger">ResetConvertToRegularTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbAdminPassword">ResetPdbAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbCreationTypeDetails">ResetPdbCreationTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRefreshTrigger">ResetRefreshTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRotateKeyTrigger">ResetRotateKeyTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldCreatePdbBackup">ResetShouldCreatePdbBackup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldPdbAdminAccountBeLocked">ResetShouldPdbAdminAccountBeLocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTdeWalletPassword">ResetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPdbCreationTypeDetails` <a name="PutPdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putPdbCreationTypeDetails"></a>

```go
func PutPdbCreationTypeDetails(value DatabasePluggableDatabasePdbCreationTypeDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putPdbCreationTypeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putTimeouts"></a>

```go
func PutTimeouts(value DatabasePluggableDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a>

---

##### `ResetContainerDatabaseAdminPassword` <a name="ResetContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetContainerDatabaseAdminPassword"></a>

```go
func ResetContainerDatabaseAdminPassword()
```

##### `ResetConvertToRegularTrigger` <a name="ResetConvertToRegularTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetConvertToRegularTrigger"></a>

```go
func ResetConvertToRegularTrigger()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetKmsKeyVersionId"></a>

```go
func ResetKmsKeyVersionId()
```

##### `ResetPdbAdminPassword` <a name="ResetPdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbAdminPassword"></a>

```go
func ResetPdbAdminPassword()
```

##### `ResetPdbCreationTypeDetails` <a name="ResetPdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbCreationTypeDetails"></a>

```go
func ResetPdbCreationTypeDetails()
```

##### `ResetRefreshTrigger` <a name="ResetRefreshTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRefreshTrigger"></a>

```go
func ResetRefreshTrigger()
```

##### `ResetRotateKeyTrigger` <a name="ResetRotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRotateKeyTrigger"></a>

```go
func ResetRotateKeyTrigger()
```

##### `ResetShouldCreatePdbBackup` <a name="ResetShouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldCreatePdbBackup"></a>

```go
func ResetShouldCreatePdbBackup()
```

##### `ResetShouldPdbAdminAccountBeLocked` <a name="ResetShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldPdbAdminAccountBeLocked"></a>

```go
func ResetShouldPdbAdminAccountBeLocked()
```

##### `ResetTdeWalletPassword` <a name="ResetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTdeWalletPassword"></a>

```go
func ResetTdeWalletPassword()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePluggableDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.DatabasePluggableDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.DatabasePluggableDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.DatabasePluggableDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.DatabasePluggableDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabasePluggableDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabasePluggableDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabasePluggableDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePluggableDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList">DatabasePluggableDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.isRestricted">IsRestricted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetails">PdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNodeLevelDetails">PdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList">DatabasePluggableDatabasePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pluggableDatabaseManagementConfig">PluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList">DatabasePluggableDatabasePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshableCloneConfig">RefreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList">DatabasePluggableDatabaseRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference">DatabasePluggableDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPasswordInput">ContainerDatabaseAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseIdInput">ContainerDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTriggerInput">ConvertToRegularTriggerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPasswordInput">PdbAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetailsInput">PdbCreationTypeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNameInput">PdbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTriggerInput">RefreshTriggerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTriggerInput">RotateKeyTriggerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackupInput">ShouldCreatePdbBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLockedInput">ShouldPdbAdminAccountBeLockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPasswordInput">TdeWalletPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPassword">ContainerDatabaseAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTrigger">ConvertToRegularTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPassword">PdbAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbName">PdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTrigger">RefreshTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTrigger">RotateKeyTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackup">ShouldCreatePdbBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked">ShouldPdbAdminAccountBeLocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connectionStrings"></a>

```go
func ConnectionStrings() DatabasePluggableDatabaseConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList">DatabasePluggableDatabaseConnectionStringsList</a>

---

##### `IsRestricted`<sup>Required</sup> <a name="IsRestricted" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.isRestricted"></a>

```go
func IsRestricted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `PdbCreationTypeDetails`<sup>Required</sup> <a name="PdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetails"></a>

```go
func PdbCreationTypeDetails() DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference</a>

---

##### `PdbNodeLevelDetails`<sup>Required</sup> <a name="PdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNodeLevelDetails"></a>

```go
func PdbNodeLevelDetails() DatabasePluggableDatabasePdbNodeLevelDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList">DatabasePluggableDatabasePdbNodeLevelDetailsList</a>

---

##### `PluggableDatabaseManagementConfig`<sup>Required</sup> <a name="PluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pluggableDatabaseManagementConfig"></a>

```go
func PluggableDatabaseManagementConfig() DatabasePluggableDatabasePluggableDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList">DatabasePluggableDatabasePluggableDatabaseManagementConfigList</a>

---

##### `RefreshableCloneConfig`<sup>Required</sup> <a name="RefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshableCloneConfig"></a>

```go
func RefreshableCloneConfig() DatabasePluggableDatabaseRefreshableCloneConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList">DatabasePluggableDatabaseRefreshableCloneConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeouts"></a>

```go
func Timeouts() DatabasePluggableDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference">DatabasePluggableDatabaseTimeoutsOutputReference</a>

---

##### `ContainerDatabaseAdminPasswordInput`<sup>Optional</sup> <a name="ContainerDatabaseAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPasswordInput"></a>

```go
func ContainerDatabaseAdminPasswordInput() *string
```

- *Type:* *string

---

##### `ContainerDatabaseIdInput`<sup>Optional</sup> <a name="ContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseIdInput"></a>

```go
func ContainerDatabaseIdInput() *string
```

- *Type:* *string

---

##### `ConvertToRegularTriggerInput`<sup>Optional</sup> <a name="ConvertToRegularTriggerInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTriggerInput"></a>

```go
func ConvertToRegularTriggerInput() *f64
```

- *Type:* *f64

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionIdInput"></a>

```go
func KmsKeyVersionIdInput() *string
```

- *Type:* *string

---

##### `PdbAdminPasswordInput`<sup>Optional</sup> <a name="PdbAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPasswordInput"></a>

```go
func PdbAdminPasswordInput() *string
```

- *Type:* *string

---

##### `PdbCreationTypeDetailsInput`<sup>Optional</sup> <a name="PdbCreationTypeDetailsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetailsInput"></a>

```go
func PdbCreationTypeDetailsInput() DatabasePluggableDatabasePdbCreationTypeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNameInput"></a>

```go
func PdbNameInput() *string
```

- *Type:* *string

---

##### `RefreshTriggerInput`<sup>Optional</sup> <a name="RefreshTriggerInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTriggerInput"></a>

```go
func RefreshTriggerInput() *f64
```

- *Type:* *f64

---

##### `RotateKeyTriggerInput`<sup>Optional</sup> <a name="RotateKeyTriggerInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTriggerInput"></a>

```go
func RotateKeyTriggerInput() *f64
```

- *Type:* *f64

---

##### `ShouldCreatePdbBackupInput`<sup>Optional</sup> <a name="ShouldCreatePdbBackupInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackupInput"></a>

```go
func ShouldCreatePdbBackupInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldPdbAdminAccountBeLockedInput`<sup>Optional</sup> <a name="ShouldPdbAdminAccountBeLockedInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLockedInput"></a>

```go
func ShouldPdbAdminAccountBeLockedInput() interface{}
```

- *Type:* interface{}

---

##### `TdeWalletPasswordInput`<sup>Optional</sup> <a name="TdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPasswordInput"></a>

```go
func TdeWalletPasswordInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerDatabaseAdminPassword`<sup>Required</sup> <a name="ContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPassword"></a>

```go
func ContainerDatabaseAdminPassword() *string
```

- *Type:* *string

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseId"></a>

```go
func ContainerDatabaseId() *string
```

- *Type:* *string

---

##### `ConvertToRegularTrigger`<sup>Required</sup> <a name="ConvertToRegularTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTrigger"></a>

```go
func ConvertToRegularTrigger() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionId"></a>

```go
func KmsKeyVersionId() *string
```

- *Type:* *string

---

##### `PdbAdminPassword`<sup>Required</sup> <a name="PdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPassword"></a>

```go
func PdbAdminPassword() *string
```

- *Type:* *string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbName"></a>

```go
func PdbName() *string
```

- *Type:* *string

---

##### `RefreshTrigger`<sup>Required</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTrigger"></a>

```go
func RefreshTrigger() *f64
```

- *Type:* *f64

---

##### `RotateKeyTrigger`<sup>Required</sup> <a name="RotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTrigger"></a>

```go
func RotateKeyTrigger() *f64
```

- *Type:* *f64

---

##### `ShouldCreatePdbBackup`<sup>Required</sup> <a name="ShouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackup"></a>

```go
func ShouldCreatePdbBackup() interface{}
```

- *Type:* interface{}

---

##### `ShouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="ShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked"></a>

```go
func ShouldPdbAdminAccountBeLocked() interface{}
```

- *Type:* interface{}

---

##### `TdeWalletPassword`<sup>Required</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPassword"></a>

```go
func TdeWalletPassword() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePluggableDatabaseConfig <a name="DatabasePluggableDatabaseConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

&databasepluggabledatabase.DatabasePluggableDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerDatabaseId: *string,
	PdbName: *string,
	ContainerDatabaseAdminPassword: *string,
	ConvertToRegularTrigger: *f64,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	KmsKeyVersionId: *string,
	PdbAdminPassword: *string,
	PdbCreationTypeDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails,
	RefreshTrigger: *f64,
	RotateKeyTrigger: *f64,
	ShouldCreatePdbBackup: interface{},
	ShouldPdbAdminAccountBeLocked: interface{},
	TdeWalletPassword: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_id DatabasePluggableDatabase#container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbName">PdbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_name DatabasePluggableDatabase#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseAdminPassword">ContainerDatabaseAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_admin_password DatabasePluggableDatabase#container_database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.convertToRegularTrigger">ConvertToRegularTrigger</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#convert_to_regular_trigger DatabasePluggableDatabase#convert_to_regular_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#defined_tags DatabasePluggableDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#freeform_tags DatabasePluggableDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#id DatabasePluggableDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#kms_key_version_id DatabasePluggableDatabase#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbAdminPassword">PdbAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_admin_password DatabasePluggableDatabase#pdb_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbCreationTypeDetails">PdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a></code> | pdb_creation_type_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.refreshTrigger">RefreshTrigger</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refresh_trigger DatabasePluggableDatabase#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.rotateKeyTrigger">RotateKeyTrigger</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#rotate_key_trigger DatabasePluggableDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldCreatePdbBackup">ShouldCreatePdbBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_create_pdb_backup DatabasePluggableDatabase#should_create_pdb_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldPdbAdminAccountBeLocked">ShouldPdbAdminAccountBeLocked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_pdb_admin_account_be_locked DatabasePluggableDatabase#should_pdb_admin_account_be_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#tde_wallet_password DatabasePluggableDatabase#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseId"></a>

```go
ContainerDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_id DatabasePluggableDatabase#container_database_id}.

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbName"></a>

```go
PdbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_name DatabasePluggableDatabase#pdb_name}.

---

##### `ContainerDatabaseAdminPassword`<sup>Optional</sup> <a name="ContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseAdminPassword"></a>

```go
ContainerDatabaseAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_admin_password DatabasePluggableDatabase#container_database_admin_password}.

---

##### `ConvertToRegularTrigger`<sup>Optional</sup> <a name="ConvertToRegularTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.convertToRegularTrigger"></a>

```go
ConvertToRegularTrigger *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#convert_to_regular_trigger DatabasePluggableDatabase#convert_to_regular_trigger}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#defined_tags DatabasePluggableDatabase#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#freeform_tags DatabasePluggableDatabase#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#id DatabasePluggableDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.kmsKeyVersionId"></a>

```go
KmsKeyVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#kms_key_version_id DatabasePluggableDatabase#kms_key_version_id}.

---

##### `PdbAdminPassword`<sup>Optional</sup> <a name="PdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbAdminPassword"></a>

```go
PdbAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_admin_password DatabasePluggableDatabase#pdb_admin_password}.

---

##### `PdbCreationTypeDetails`<sup>Optional</sup> <a name="PdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbCreationTypeDetails"></a>

```go
PdbCreationTypeDetails DatabasePluggableDatabasePdbCreationTypeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

pdb_creation_type_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_creation_type_details DatabasePluggableDatabase#pdb_creation_type_details}

---

##### `RefreshTrigger`<sup>Optional</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.refreshTrigger"></a>

```go
RefreshTrigger *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refresh_trigger DatabasePluggableDatabase#refresh_trigger}.

---

##### `RotateKeyTrigger`<sup>Optional</sup> <a name="RotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.rotateKeyTrigger"></a>

```go
RotateKeyTrigger *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#rotate_key_trigger DatabasePluggableDatabase#rotate_key_trigger}.

---

##### `ShouldCreatePdbBackup`<sup>Optional</sup> <a name="ShouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldCreatePdbBackup"></a>

```go
ShouldCreatePdbBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_create_pdb_backup DatabasePluggableDatabase#should_create_pdb_backup}.

---

##### `ShouldPdbAdminAccountBeLocked`<sup>Optional</sup> <a name="ShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldPdbAdminAccountBeLocked"></a>

```go
ShouldPdbAdminAccountBeLocked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_pdb_admin_account_be_locked DatabasePluggableDatabase#should_pdb_admin_account_be_locked}.

---

##### `TdeWalletPassword`<sup>Optional</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.tdeWalletPassword"></a>

```go
TdeWalletPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#tde_wallet_password DatabasePluggableDatabase#tde_wallet_password}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.timeouts"></a>

```go
Timeouts DatabasePluggableDatabaseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#timeouts DatabasePluggableDatabase#timeouts}

---

### DatabasePluggableDatabaseConnectionStrings <a name="DatabasePluggableDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

&databasepluggabledatabase.DatabasePluggableDatabaseConnectionStrings {

}
```


### DatabasePluggableDatabasePdbCreationTypeDetails <a name="DatabasePluggableDatabasePdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

&databasepluggabledatabase.DatabasePluggableDatabasePdbCreationTypeDetails {
	CreationType: *string,
	SourcePluggableDatabaseId: *string,
	DblinkUsername: *string,
	DblinkUserPassword: *string,
	IsThinClone: interface{},
	RefreshableCloneDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails,
	SourceContainerDatabaseAdminPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.creationType">CreationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#creation_type DatabasePluggableDatabase#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourcePluggableDatabaseId">SourcePluggableDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_pluggable_database_id DatabasePluggableDatabase#source_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUsername">DblinkUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_username DatabasePluggableDatabase#dblink_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUserPassword">DblinkUserPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_user_password DatabasePluggableDatabase#dblink_user_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.isThinClone">IsThinClone</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_thin_clone DatabasePluggableDatabase#is_thin_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.refreshableCloneDetails">RefreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | refreshable_clone_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourceContainerDatabaseAdminPassword">SourceContainerDatabaseAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_container_database_admin_password DatabasePluggableDatabase#source_container_database_admin_password}. |

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.creationType"></a>

```go
CreationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#creation_type DatabasePluggableDatabase#creation_type}.

---

##### `SourcePluggableDatabaseId`<sup>Required</sup> <a name="SourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourcePluggableDatabaseId"></a>

```go
SourcePluggableDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_pluggable_database_id DatabasePluggableDatabase#source_pluggable_database_id}.

---

##### `DblinkUsername`<sup>Optional</sup> <a name="DblinkUsername" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUsername"></a>

```go
DblinkUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_username DatabasePluggableDatabase#dblink_username}.

---

##### `DblinkUserPassword`<sup>Optional</sup> <a name="DblinkUserPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUserPassword"></a>

```go
DblinkUserPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_user_password DatabasePluggableDatabase#dblink_user_password}.

---

##### `IsThinClone`<sup>Optional</sup> <a name="IsThinClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.isThinClone"></a>

```go
IsThinClone interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_thin_clone DatabasePluggableDatabase#is_thin_clone}.

---

##### `RefreshableCloneDetails`<sup>Optional</sup> <a name="RefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.refreshableCloneDetails"></a>

```go
RefreshableCloneDetails DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

refreshable_clone_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refreshable_clone_details DatabasePluggableDatabase#refreshable_clone_details}

---

##### `SourceContainerDatabaseAdminPassword`<sup>Optional</sup> <a name="SourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourceContainerDatabaseAdminPassword"></a>

```go
SourceContainerDatabaseAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_container_database_admin_password DatabasePluggableDatabase#source_container_database_admin_password}.

---

### DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails <a name="DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

&databasepluggabledatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails {
	IsRefreshableClone: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_refreshable_clone DatabasePluggableDatabase#is_refreshable_clone}. |

---

##### `IsRefreshableClone`<sup>Optional</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.property.isRefreshableClone"></a>

```go
IsRefreshableClone interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_refreshable_clone DatabasePluggableDatabase#is_refreshable_clone}.

---

### DatabasePluggableDatabasePdbNodeLevelDetails <a name="DatabasePluggableDatabasePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

&databasepluggabledatabase.DatabasePluggableDatabasePdbNodeLevelDetails {

}
```


### DatabasePluggableDatabasePluggableDatabaseManagementConfig <a name="DatabasePluggableDatabasePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

&databasepluggabledatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig {

}
```


### DatabasePluggableDatabaseRefreshableCloneConfig <a name="DatabasePluggableDatabaseRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

&databasepluggabledatabase.DatabasePluggableDatabaseRefreshableCloneConfig {

}
```


### DatabasePluggableDatabaseTimeouts <a name="DatabasePluggableDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

&databasepluggabledatabase.DatabasePluggableDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#create DatabasePluggableDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#delete DatabasePluggableDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#update DatabasePluggableDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#create DatabasePluggableDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#delete DatabasePluggableDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#update DatabasePluggableDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePluggableDatabaseConnectionStringsList <a name="DatabasePluggableDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabaseConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabasePluggableDatabaseConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.get"></a>

```go
func Get(index *f64) DatabasePluggableDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabasePluggableDatabaseConnectionStringsOutputReference <a name="DatabasePluggableDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabaseConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabasePluggableDatabaseConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault">PdbDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault">PdbIpDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings">DatabasePluggableDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```go
func AllConnectionStrings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PdbDefault`<sup>Required</sup> <a name="PdbDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault"></a>

```go
func PdbDefault() *string
```

- *Type:* *string

---

##### `PdbIpDefault`<sup>Required</sup> <a name="PdbIpDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault"></a>

```go
func PdbIpDefault() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePluggableDatabaseConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings">DatabasePluggableDatabaseConnectionStrings</a>

---


### DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference <a name="DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.putRefreshableCloneDetails">PutRefreshableCloneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUsername">ResetDblinkUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUserPassword">ResetDblinkUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetIsThinClone">ResetIsThinClone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetRefreshableCloneDetails">ResetRefreshableCloneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetSourceContainerDatabaseAdminPassword">ResetSourceContainerDatabaseAdminPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRefreshableCloneDetails` <a name="PutRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.putRefreshableCloneDetails"></a>

```go
func PutRefreshableCloneDetails(value DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.putRefreshableCloneDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---

##### `ResetDblinkUsername` <a name="ResetDblinkUsername" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUsername"></a>

```go
func ResetDblinkUsername()
```

##### `ResetDblinkUserPassword` <a name="ResetDblinkUserPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUserPassword"></a>

```go
func ResetDblinkUserPassword()
```

##### `ResetIsThinClone` <a name="ResetIsThinClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetIsThinClone"></a>

```go
func ResetIsThinClone()
```

##### `ResetRefreshableCloneDetails` <a name="ResetRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetRefreshableCloneDetails"></a>

```go
func ResetRefreshableCloneDetails()
```

##### `ResetSourceContainerDatabaseAdminPassword` <a name="ResetSourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetSourceContainerDatabaseAdminPassword"></a>

```go
func ResetSourceContainerDatabaseAdminPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails">RefreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationTypeInput">CreationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsernameInput">DblinkUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPasswordInput">DblinkUserPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinCloneInput">IsThinCloneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetailsInput">RefreshableCloneDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPasswordInput">SourceContainerDatabaseAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseIdInput">SourcePluggableDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType">CreationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername">DblinkUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword">DblinkUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone">IsThinClone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword">SourceContainerDatabaseAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId">SourcePluggableDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RefreshableCloneDetails`<sup>Required</sup> <a name="RefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails"></a>

```go
func RefreshableCloneDetails() DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference</a>

---

##### `CreationTypeInput`<sup>Optional</sup> <a name="CreationTypeInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationTypeInput"></a>

```go
func CreationTypeInput() *string
```

- *Type:* *string

---

##### `DblinkUsernameInput`<sup>Optional</sup> <a name="DblinkUsernameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsernameInput"></a>

```go
func DblinkUsernameInput() *string
```

- *Type:* *string

---

##### `DblinkUserPasswordInput`<sup>Optional</sup> <a name="DblinkUserPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPasswordInput"></a>

```go
func DblinkUserPasswordInput() *string
```

- *Type:* *string

---

##### `IsThinCloneInput`<sup>Optional</sup> <a name="IsThinCloneInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinCloneInput"></a>

```go
func IsThinCloneInput() interface{}
```

- *Type:* interface{}

---

##### `RefreshableCloneDetailsInput`<sup>Optional</sup> <a name="RefreshableCloneDetailsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetailsInput"></a>

```go
func RefreshableCloneDetailsInput() DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---

##### `SourceContainerDatabaseAdminPasswordInput`<sup>Optional</sup> <a name="SourceContainerDatabaseAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPasswordInput"></a>

```go
func SourceContainerDatabaseAdminPasswordInput() *string
```

- *Type:* *string

---

##### `SourcePluggableDatabaseIdInput`<sup>Optional</sup> <a name="SourcePluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseIdInput"></a>

```go
func SourcePluggableDatabaseIdInput() *string
```

- *Type:* *string

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType"></a>

```go
func CreationType() *string
```

- *Type:* *string

---

##### `DblinkUsername`<sup>Required</sup> <a name="DblinkUsername" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername"></a>

```go
func DblinkUsername() *string
```

- *Type:* *string

---

##### `DblinkUserPassword`<sup>Required</sup> <a name="DblinkUserPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword"></a>

```go
func DblinkUserPassword() *string
```

- *Type:* *string

---

##### `IsThinClone`<sup>Required</sup> <a name="IsThinClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone"></a>

```go
func IsThinClone() interface{}
```

- *Type:* interface{}

---

##### `SourceContainerDatabaseAdminPassword`<sup>Required</sup> <a name="SourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword"></a>

```go
func SourceContainerDatabaseAdminPassword() *string
```

- *Type:* *string

---

##### `SourcePluggableDatabaseId`<sup>Required</sup> <a name="SourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId"></a>

```go
func SourcePluggableDatabaseId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePluggableDatabasePdbCreationTypeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

---


### DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference <a name="DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resetIsRefreshableClone">ResetIsRefreshableClone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsRefreshableClone` <a name="ResetIsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resetIsRefreshableClone"></a>

```go
func ResetIsRefreshableClone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableCloneInput">IsRefreshableCloneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsRefreshableCloneInput`<sup>Optional</sup> <a name="IsRefreshableCloneInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableCloneInput"></a>

```go
func IsRefreshableCloneInput() interface{}
```

- *Type:* interface{}

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone"></a>

```go
func IsRefreshableClone() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---


### DatabasePluggableDatabasePdbNodeLevelDetailsList <a name="DatabasePluggableDatabasePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabasePdbNodeLevelDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabasePluggableDatabasePdbNodeLevelDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.get"></a>

```go
func Get(index *f64) DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference <a name="DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName">NodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails">DatabasePluggableDatabasePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```go
func NodeName() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePluggableDatabasePdbNodeLevelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails">DatabasePluggableDatabasePdbNodeLevelDetails</a>

---


### DatabasePluggableDatabasePluggableDatabaseManagementConfigList <a name="DatabasePluggableDatabasePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabasePluggableDatabaseManagementConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabasePluggableDatabasePluggableDatabaseManagementConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.get"></a>

```go
func Get(index *f64) DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference <a name="DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus">ManagementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig">DatabasePluggableDatabasePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagementStatus`<sup>Required</sup> <a name="ManagementStatus" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```go
func ManagementStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePluggableDatabasePluggableDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig">DatabasePluggableDatabasePluggableDatabaseManagementConfig</a>

---


### DatabasePluggableDatabaseRefreshableCloneConfigList <a name="DatabasePluggableDatabaseRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabaseRefreshableCloneConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabasePluggableDatabaseRefreshableCloneConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.get"></a>

```go
func Get(index *f64) DatabasePluggableDatabaseRefreshableCloneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabasePluggableDatabaseRefreshableCloneConfigOutputReference <a name="DatabasePluggableDatabaseRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabaseRefreshableCloneConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabasePluggableDatabaseRefreshableCloneConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig">DatabasePluggableDatabaseRefreshableCloneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```go
func IsRefreshableClone() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePluggableDatabaseRefreshableCloneConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig">DatabasePluggableDatabaseRefreshableCloneConfig</a>

---


### DatabasePluggableDatabaseTimeoutsOutputReference <a name="DatabasePluggableDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabase"

databasepluggabledatabase.NewDatabasePluggableDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabasePluggableDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




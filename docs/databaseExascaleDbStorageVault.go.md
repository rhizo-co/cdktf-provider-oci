# `databaseExascaleDbStorageVault` Submodule <a name="`databaseExascaleDbStorageVault` Submodule" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExascaleDbStorageVault <a name="DatabaseExascaleDbStorageVault" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault oci_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexascaledbstoragevault"

databaseexascaledbstoragevault.NewDatabaseExascaleDbStorageVault(scope Construct, id *string, config DatabaseExascaleDbStorageVaultConfig) DatabaseExascaleDbStorageVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig">DatabaseExascaleDbStorageVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig">DatabaseExascaleDbStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putHighCapacityDatabaseStorage">PutHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetAdditionalFlashCacheInPercent">ResetAdditionalFlashCacheInPercent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHighCapacityDatabaseStorage` <a name="PutHighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putHighCapacityDatabaseStorage"></a>

```go
func PutHighCapacityDatabaseStorage(value DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putHighCapacityDatabaseStorage.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseExascaleDbStorageVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `ResetAdditionalFlashCacheInPercent` <a name="ResetAdditionalFlashCacheInPercent" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetAdditionalFlashCacheInPercent"></a>

```go
func ResetAdditionalFlashCacheInPercent()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExascaleDbStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexascaledbstoragevault"

databaseexascaledbstoragevault.DatabaseExascaleDbStorageVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexascaledbstoragevault"

databaseexascaledbstoragevault.DatabaseExascaleDbStorageVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexascaledbstoragevault"

databaseexascaledbstoragevault.DatabaseExascaleDbStorageVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexascaledbstoragevault"

databaseexascaledbstoragevault.DatabaseExascaleDbStorageVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseExascaleDbStorageVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseExascaleDbStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference">DatabaseExascaleDbStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterCount">VmClusterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterIds">VmClusterIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercentInput">AdditionalFlashCacheInPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorageInput">HighCapacityDatabaseStorageInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercent">AdditionalFlashCacheInPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorage"></a>

```go
func HighCapacityDatabaseStorage() DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeouts"></a>

```go
func Timeouts() DatabaseExascaleDbStorageVaultTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference">DatabaseExascaleDbStorageVaultTimeoutsOutputReference</a>

---

##### `VmClusterCount`<sup>Required</sup> <a name="VmClusterCount" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterCount"></a>

```go
func VmClusterCount() *f64
```

- *Type:* *f64

---

##### `VmClusterIds`<sup>Required</sup> <a name="VmClusterIds" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterIds"></a>

```go
func VmClusterIds() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalFlashCacheInPercentInput`<sup>Optional</sup> <a name="AdditionalFlashCacheInPercentInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercentInput"></a>

```go
func AdditionalFlashCacheInPercentInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HighCapacityDatabaseStorageInput`<sup>Optional</sup> <a name="HighCapacityDatabaseStorageInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorageInput"></a>

```go
func HighCapacityDatabaseStorageInput() DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `AdditionalFlashCacheInPercent`<sup>Required</sup> <a name="AdditionalFlashCacheInPercent" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercent"></a>

```go
func AdditionalFlashCacheInPercent() *f64
```

- *Type:* *f64

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExascaleDbStorageVaultConfig <a name="DatabaseExascaleDbStorageVaultConfig" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexascaledbstoragevault"

&databaseexascaledbstoragevault.DatabaseExascaleDbStorageVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityDomain: *string,
	CompartmentId: *string,
	DisplayName: *string,
	HighCapacityDatabaseStorage: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage,
	AdditionalFlashCacheInPercent: *f64,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#availability_domain DatabaseExascaleDbStorageVault#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#compartment_id DatabaseExascaleDbStorageVault#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#display_name DatabaseExascaleDbStorageVault#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.additionalFlashCacheInPercent">AdditionalFlashCacheInPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#additional_flash_cache_in_percent DatabaseExascaleDbStorageVault#additional_flash_cache_in_percent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#defined_tags DatabaseExascaleDbStorageVault#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#description DatabaseExascaleDbStorageVault#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#freeform_tags DatabaseExascaleDbStorageVault#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#id DatabaseExascaleDbStorageVault#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#time_zone DatabaseExascaleDbStorageVault#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#availability_domain DatabaseExascaleDbStorageVault#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#compartment_id DatabaseExascaleDbStorageVault#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#display_name DatabaseExascaleDbStorageVault#display_name}.

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.highCapacityDatabaseStorage"></a>

```go
HighCapacityDatabaseStorage DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#high_capacity_database_storage DatabaseExascaleDbStorageVault#high_capacity_database_storage}

---

##### `AdditionalFlashCacheInPercent`<sup>Optional</sup> <a name="AdditionalFlashCacheInPercent" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.additionalFlashCacheInPercent"></a>

```go
AdditionalFlashCacheInPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#additional_flash_cache_in_percent DatabaseExascaleDbStorageVault#additional_flash_cache_in_percent}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#defined_tags DatabaseExascaleDbStorageVault#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#description DatabaseExascaleDbStorageVault#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#freeform_tags DatabaseExascaleDbStorageVault#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#id DatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeouts"></a>

```go
Timeouts DatabaseExascaleDbStorageVaultTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#timeouts DatabaseExascaleDbStorageVault#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#time_zone DatabaseExascaleDbStorageVault#time_zone}.

---

### DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage <a name="DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexascaledbstoragevault"

&databaseexascaledbstoragevault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage {
	TotalSizeInGbs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGbs">TotalSizeInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#total_size_in_gbs DatabaseExascaleDbStorageVault#total_size_in_gbs}. |

---

##### `TotalSizeInGbs`<sup>Required</sup> <a name="TotalSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGbs"></a>

```go
TotalSizeInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#total_size_in_gbs DatabaseExascaleDbStorageVault#total_size_in_gbs}.

---

### DatabaseExascaleDbStorageVaultTimeouts <a name="DatabaseExascaleDbStorageVaultTimeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexascaledbstoragevault"

&databaseexascaledbstoragevault.DatabaseExascaleDbStorageVaultTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#create DatabaseExascaleDbStorageVault#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#delete DatabaseExascaleDbStorageVault#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#update DatabaseExascaleDbStorageVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#create DatabaseExascaleDbStorageVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#delete DatabaseExascaleDbStorageVault#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#update DatabaseExascaleDbStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference <a name="DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexascaledbstoragevault"

databaseexascaledbstoragevault.NewDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs">AvailableSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbsInput">TotalSizeInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs">TotalSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableSizeInGbs`<sup>Required</sup> <a name="AvailableSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs"></a>

```go
func AvailableSizeInGbs() *f64
```

- *Type:* *f64

---

##### `TotalSizeInGbsInput`<sup>Optional</sup> <a name="TotalSizeInGbsInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbsInput"></a>

```go
func TotalSizeInGbsInput() *f64
```

- *Type:* *f64

---

##### `TotalSizeInGbs`<sup>Required</sup> <a name="TotalSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs"></a>

```go
func TotalSizeInGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

---


### DatabaseExascaleDbStorageVaultTimeoutsOutputReference <a name="DatabaseExascaleDbStorageVaultTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexascaledbstoragevault"

databaseexascaledbstoragevault.NewDatabaseExascaleDbStorageVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExascaleDbStorageVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




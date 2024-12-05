# `databaseAutonomousDatabaseSaasAdminUser` Submodule <a name="`databaseAutonomousDatabaseSaasAdminUser` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabaseSaasAdminUser <a name="DatabaseAutonomousDatabaseSaasAdminUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user oci_database_autonomous_database_saas_admin_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasesaasadminuser"

databaseautonomousdatabasesaasadminuser.NewDatabaseAutonomousDatabaseSaasAdminUser(scope Construct, id *string, config DatabaseAutonomousDatabaseSaasAdminUserConfig) DatabaseAutonomousDatabaseSaasAdminUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig">DatabaseAutonomousDatabaseSaasAdminUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig">DatabaseAutonomousDatabaseSaasAdminUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretVersionNumber">ResetSecretVersionNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeSaasAdminUserEnabled">ResetTimeSaasAdminUserEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseAutonomousDatabaseSaasAdminUserTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a>

---

##### `ResetAccessType` <a name="ResetAccessType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetAccessType"></a>

```go
func ResetAccessType()
```

##### `ResetDuration` <a name="ResetDuration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetId"></a>

```go
func ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretId"></a>

```go
func ResetSecretId()
```

##### `ResetSecretVersionNumber` <a name="ResetSecretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretVersionNumber"></a>

```go
func ResetSecretVersionNumber()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeSaasAdminUserEnabled` <a name="ResetTimeSaasAdminUserEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeSaasAdminUserEnabled"></a>

```go
func ResetTimeSaasAdminUserEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabaseSaasAdminUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasesaasadminuser"

databaseautonomousdatabasesaasadminuser.DatabaseAutonomousDatabaseSaasAdminUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasesaasadminuser"

databaseautonomousdatabasesaasadminuser.DatabaseAutonomousDatabaseSaasAdminUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasesaasadminuser"

databaseautonomousdatabasesaasadminuser.DatabaseAutonomousDatabaseSaasAdminUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasesaasadminuser"

databaseautonomousdatabasesaasadminuser.DatabaseAutonomousDatabaseSaasAdminUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseAutonomousDatabaseSaasAdminUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseAutonomousDatabaseSaasAdminUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseAutonomousDatabaseSaasAdminUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabaseSaasAdminUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference">DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumberInput">SecretVersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabledInput">TimeSaasAdminUserEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumber">SecretVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabled">TimeSaasAdminUserEnabled</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeouts"></a>

```go
func Timeouts() DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference">DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference</a>

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseIdInput"></a>

```go
func AutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `SecretVersionNumberInput`<sup>Optional</sup> <a name="SecretVersionNumberInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumberInput"></a>

```go
func SecretVersionNumberInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeSaasAdminUserEnabledInput`<sup>Optional</sup> <a name="TimeSaasAdminUserEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabledInput"></a>

```go
func TimeSaasAdminUserEnabledInput() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `SecretVersionNumber`<sup>Required</sup> <a name="SecretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumber"></a>

```go
func SecretVersionNumber() *f64
```

- *Type:* *f64

---

##### `TimeSaasAdminUserEnabled`<sup>Required</sup> <a name="TimeSaasAdminUserEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabled"></a>

```go
func TimeSaasAdminUserEnabled() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseSaasAdminUserConfig <a name="DatabaseAutonomousDatabaseSaasAdminUserConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasesaasadminuser"

&databaseautonomousdatabasesaasadminuser.DatabaseAutonomousDatabaseSaasAdminUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousDatabaseId: *string,
	AccessType: *string,
	Duration: *f64,
	Id: *string,
	Password: *string,
	SecretId: *string,
	SecretVersionNumber: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts,
	TimeSaasAdminUserEnabled: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#autonomous_database_id DatabaseAutonomousDatabaseSaasAdminUser#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.accessType">AccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#access_type DatabaseAutonomousDatabaseSaasAdminUser#access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.duration">Duration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#duration DatabaseAutonomousDatabaseSaasAdminUser#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#id DatabaseAutonomousDatabaseSaasAdminUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#password DatabaseAutonomousDatabaseSaasAdminUser#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_id DatabaseAutonomousDatabaseSaasAdminUser#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretVersionNumber">SecretVersionNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_version_number DatabaseAutonomousDatabaseSaasAdminUser#secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeSaasAdminUserEnabled">TimeSaasAdminUserEnabled</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#time_saas_admin_user_enabled DatabaseAutonomousDatabaseSaasAdminUser#time_saas_admin_user_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.autonomousDatabaseId"></a>

```go
AutonomousDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#autonomous_database_id DatabaseAutonomousDatabaseSaasAdminUser#autonomous_database_id}.

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#access_type DatabaseAutonomousDatabaseSaasAdminUser#access_type}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#duration DatabaseAutonomousDatabaseSaasAdminUser#duration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#id DatabaseAutonomousDatabaseSaasAdminUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#password DatabaseAutonomousDatabaseSaasAdminUser#password}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_id DatabaseAutonomousDatabaseSaasAdminUser#secret_id}.

---

##### `SecretVersionNumber`<sup>Optional</sup> <a name="SecretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretVersionNumber"></a>

```go
SecretVersionNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_version_number DatabaseAutonomousDatabaseSaasAdminUser#secret_version_number}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeouts"></a>

```go
Timeouts DatabaseAutonomousDatabaseSaasAdminUserTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#timeouts DatabaseAutonomousDatabaseSaasAdminUser#timeouts}

---

##### `TimeSaasAdminUserEnabled`<sup>Optional</sup> <a name="TimeSaasAdminUserEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeSaasAdminUserEnabled"></a>

```go
TimeSaasAdminUserEnabled *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#time_saas_admin_user_enabled DatabaseAutonomousDatabaseSaasAdminUser#time_saas_admin_user_enabled}.

---

### DatabaseAutonomousDatabaseSaasAdminUserTimeouts <a name="DatabaseAutonomousDatabaseSaasAdminUserTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasesaasadminuser"

&databaseautonomousdatabasesaasadminuser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#create DatabaseAutonomousDatabaseSaasAdminUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#delete DatabaseAutonomousDatabaseSaasAdminUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#update DatabaseAutonomousDatabaseSaasAdminUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#create DatabaseAutonomousDatabaseSaasAdminUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#delete DatabaseAutonomousDatabaseSaasAdminUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#update DatabaseAutonomousDatabaseSaasAdminUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasesaasadminuser"

databaseautonomousdatabasesaasadminuser.NewDatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




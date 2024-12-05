# `cloudMigrationsMigrationPlan` Submodule <a name="`cloudMigrationsMigrationPlan` Submodule" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudMigrationsMigrationPlan <a name="CloudMigrationsMigrationPlan" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan oci_cloud_migrations_migration_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlan(scope Construct, id *string, config CloudMigrationsMigrationPlanConfig) CloudMigrationsMigrationPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig">CloudMigrationsMigrationPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig">CloudMigrationsMigrationPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putStrategies">PutStrategies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTargetEnvironments">PutTargetEnvironments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetSourceMigrationPlanId">ResetSourceMigrationPlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetStrategies">ResetStrategies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTargetEnvironments">ResetTargetEnvironments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStrategies` <a name="PutStrategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putStrategies"></a>

```go
func PutStrategies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putStrategies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetEnvironments` <a name="PutTargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTargetEnvironments"></a>

```go
func PutTargetEnvironments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTargetEnvironments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTimeouts"></a>

```go
func PutTimeouts(value CloudMigrationsMigrationPlanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetId"></a>

```go
func ResetId()
```

##### `ResetSourceMigrationPlanId` <a name="ResetSourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetSourceMigrationPlanId"></a>

```go
func ResetSourceMigrationPlanId()
```

##### `ResetStrategies` <a name="ResetStrategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetStrategies"></a>

```go
func ResetStrategies()
```

##### `ResetTargetEnvironments` <a name="ResetTargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTargetEnvironments"></a>

```go
func ResetTargetEnvironments()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.CloudMigrationsMigrationPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.CloudMigrationsMigrationPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.CloudMigrationsMigrationPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.CloudMigrationsMigrationPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudMigrationsMigrationPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudMigrationsMigrationPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudMigrationsMigrationPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.calculatedLimits">CalculatedLimits</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationPlanStats">MigrationPlanStats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList">CloudMigrationsMigrationPlanMigrationPlanStatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.referenceToRmsStack">ReferenceToRmsStack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategies">Strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList">CloudMigrationsMigrationPlanStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironments">TargetEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList">CloudMigrationsMigrationPlanTargetEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference">CloudMigrationsMigrationPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationIdInput">MigrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanIdInput">SourceMigrationPlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategiesInput">StrategiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironmentsInput">TargetEnvironmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationId">MigrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanId">SourceMigrationPlanId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CalculatedLimits`<sup>Required</sup> <a name="CalculatedLimits" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.calculatedLimits"></a>

```go
func CalculatedLimits() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MigrationPlanStats`<sup>Required</sup> <a name="MigrationPlanStats" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationPlanStats"></a>

```go
func MigrationPlanStats() CloudMigrationsMigrationPlanMigrationPlanStatsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList">CloudMigrationsMigrationPlanMigrationPlanStatsList</a>

---

##### `ReferenceToRmsStack`<sup>Required</sup> <a name="ReferenceToRmsStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.referenceToRmsStack"></a>

```go
func ReferenceToRmsStack() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Strategies`<sup>Required</sup> <a name="Strategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategies"></a>

```go
func Strategies() CloudMigrationsMigrationPlanStrategiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList">CloudMigrationsMigrationPlanStrategiesList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetEnvironments`<sup>Required</sup> <a name="TargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironments"></a>

```go
func TargetEnvironments() CloudMigrationsMigrationPlanTargetEnvironmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList">CloudMigrationsMigrationPlanTargetEnvironmentsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeouts"></a>

```go
func Timeouts() CloudMigrationsMigrationPlanTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference">CloudMigrationsMigrationPlanTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MigrationIdInput`<sup>Optional</sup> <a name="MigrationIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationIdInput"></a>

```go
func MigrationIdInput() *string
```

- *Type:* *string

---

##### `SourceMigrationPlanIdInput`<sup>Optional</sup> <a name="SourceMigrationPlanIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanIdInput"></a>

```go
func SourceMigrationPlanIdInput() *string
```

- *Type:* *string

---

##### `StrategiesInput`<sup>Optional</sup> <a name="StrategiesInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategiesInput"></a>

```go
func StrategiesInput() interface{}
```

- *Type:* interface{}

---

##### `TargetEnvironmentsInput`<sup>Optional</sup> <a name="TargetEnvironmentsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironmentsInput"></a>

```go
func TargetEnvironmentsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationId"></a>

```go
func MigrationId() *string
```

- *Type:* *string

---

##### `SourceMigrationPlanId`<sup>Required</sup> <a name="SourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanId"></a>

```go
func SourceMigrationPlanId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudMigrationsMigrationPlanConfig <a name="CloudMigrationsMigrationPlanConfig" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

&cloudmigrationsmigrationplan.CloudMigrationsMigrationPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	MigrationId: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	SourceMigrationPlanId: *string,
	Strategies: interface{},
	TargetEnvironments: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#compartment_id CloudMigrationsMigrationPlan#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#display_name CloudMigrationsMigrationPlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.migrationId">MigrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#migration_id CloudMigrationsMigrationPlan#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#defined_tags CloudMigrationsMigrationPlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#freeform_tags CloudMigrationsMigrationPlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#id CloudMigrationsMigrationPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.sourceMigrationPlanId">SourceMigrationPlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#source_migration_plan_id CloudMigrationsMigrationPlan#source_migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.strategies">Strategies</a></code> | <code>interface{}</code> | strategies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.targetEnvironments">TargetEnvironments</a></code> | <code>interface{}</code> | target_environments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#compartment_id CloudMigrationsMigrationPlan#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#display_name CloudMigrationsMigrationPlan#display_name}.

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.migrationId"></a>

```go
MigrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#migration_id CloudMigrationsMigrationPlan#migration_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#defined_tags CloudMigrationsMigrationPlan#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#freeform_tags CloudMigrationsMigrationPlan#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#id CloudMigrationsMigrationPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceMigrationPlanId`<sup>Optional</sup> <a name="SourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.sourceMigrationPlanId"></a>

```go
SourceMigrationPlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#source_migration_plan_id CloudMigrationsMigrationPlan#source_migration_plan_id}.

---

##### `Strategies`<sup>Optional</sup> <a name="Strategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.strategies"></a>

```go
Strategies interface{}
```

- *Type:* interface{}

strategies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#strategies CloudMigrationsMigrationPlan#strategies}

---

##### `TargetEnvironments`<sup>Optional</sup> <a name="TargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.targetEnvironments"></a>

```go
TargetEnvironments interface{}
```

- *Type:* interface{}

target_environments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_environments CloudMigrationsMigrationPlan#target_environments}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.timeouts"></a>

```go
Timeouts CloudMigrationsMigrationPlanTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#timeouts CloudMigrationsMigrationPlan#timeouts}

---

### CloudMigrationsMigrationPlanMigrationPlanStats <a name="CloudMigrationsMigrationPlanMigrationPlanStats" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

&cloudmigrationsmigrationplan.CloudMigrationsMigrationPlanMigrationPlanStats {

}
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

&cloudmigrationsmigrationplan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost {

}
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

&cloudmigrationsmigrationplan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute {

}
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

&cloudmigrationsmigrationplan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage {

}
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

&cloudmigrationsmigrationplan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage {

}
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

&cloudmigrationsmigrationplan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes {

}
```


### CloudMigrationsMigrationPlanStrategies <a name="CloudMigrationsMigrationPlanStrategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

&cloudmigrationsmigrationplan.CloudMigrationsMigrationPlanStrategies {
	ResourceType: *string,
	StrategyType: *string,
	AdjustmentMultiplier: *f64,
	MetricTimeWindow: *string,
	MetricType: *string,
	Percentile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#resource_type CloudMigrationsMigrationPlan#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.strategyType">StrategyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#strategy_type CloudMigrationsMigrationPlan#strategy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.adjustmentMultiplier">AdjustmentMultiplier</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#adjustment_multiplier CloudMigrationsMigrationPlan#adjustment_multiplier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricTimeWindow">MetricTimeWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_time_window CloudMigrationsMigrationPlan#metric_time_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricType">MetricType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_type CloudMigrationsMigrationPlan#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.percentile">Percentile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#percentile CloudMigrationsMigrationPlan#percentile}. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#resource_type CloudMigrationsMigrationPlan#resource_type}.

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.strategyType"></a>

```go
StrategyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#strategy_type CloudMigrationsMigrationPlan#strategy_type}.

---

##### `AdjustmentMultiplier`<sup>Optional</sup> <a name="AdjustmentMultiplier" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.adjustmentMultiplier"></a>

```go
AdjustmentMultiplier *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#adjustment_multiplier CloudMigrationsMigrationPlan#adjustment_multiplier}.

---

##### `MetricTimeWindow`<sup>Optional</sup> <a name="MetricTimeWindow" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricTimeWindow"></a>

```go
MetricTimeWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_time_window CloudMigrationsMigrationPlan#metric_time_window}.

---

##### `MetricType`<sup>Optional</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricType"></a>

```go
MetricType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_type CloudMigrationsMigrationPlan#metric_type}.

---

##### `Percentile`<sup>Optional</sup> <a name="Percentile" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.percentile"></a>

```go
Percentile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#percentile CloudMigrationsMigrationPlan#percentile}.

---

### CloudMigrationsMigrationPlanTargetEnvironments <a name="CloudMigrationsMigrationPlanTargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

&cloudmigrationsmigrationplan.CloudMigrationsMigrationPlanTargetEnvironments {
	Subnet: *string,
	TargetEnvironmentType: *string,
	Vcn: *string,
	AvailabilityDomain: *string,
	DedicatedVmHost: *string,
	FaultDomain: *string,
	MsLicense: *string,
	PreferredShapeType: *string,
	TargetCompartmentId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.subnet">Subnet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#subnet CloudMigrationsMigrationPlan#subnet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetEnvironmentType">TargetEnvironmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_environment_type CloudMigrationsMigrationPlan#target_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.vcn">Vcn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#vcn CloudMigrationsMigrationPlan#vcn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#availability_domain CloudMigrationsMigrationPlan#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.dedicatedVmHost">DedicatedVmHost</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#dedicated_vm_host CloudMigrationsMigrationPlan#dedicated_vm_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#fault_domain CloudMigrationsMigrationPlan#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.msLicense">MsLicense</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#ms_license CloudMigrationsMigrationPlan#ms_license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.preferredShapeType">PreferredShapeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#preferred_shape_type CloudMigrationsMigrationPlan#preferred_shape_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetCompartmentId">TargetCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_compartment_id CloudMigrationsMigrationPlan#target_compartment_id}. |

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.subnet"></a>

```go
Subnet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#subnet CloudMigrationsMigrationPlan#subnet}.

---

##### `TargetEnvironmentType`<sup>Required</sup> <a name="TargetEnvironmentType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetEnvironmentType"></a>

```go
TargetEnvironmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_environment_type CloudMigrationsMigrationPlan#target_environment_type}.

---

##### `Vcn`<sup>Required</sup> <a name="Vcn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.vcn"></a>

```go
Vcn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#vcn CloudMigrationsMigrationPlan#vcn}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#availability_domain CloudMigrationsMigrationPlan#availability_domain}.

---

##### `DedicatedVmHost`<sup>Optional</sup> <a name="DedicatedVmHost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.dedicatedVmHost"></a>

```go
DedicatedVmHost *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#dedicated_vm_host CloudMigrationsMigrationPlan#dedicated_vm_host}.

---

##### `FaultDomain`<sup>Optional</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.faultDomain"></a>

```go
FaultDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#fault_domain CloudMigrationsMigrationPlan#fault_domain}.

---

##### `MsLicense`<sup>Optional</sup> <a name="MsLicense" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.msLicense"></a>

```go
MsLicense *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#ms_license CloudMigrationsMigrationPlan#ms_license}.

---

##### `PreferredShapeType`<sup>Optional</sup> <a name="PreferredShapeType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.preferredShapeType"></a>

```go
PreferredShapeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#preferred_shape_type CloudMigrationsMigrationPlan#preferred_shape_type}.

---

##### `TargetCompartmentId`<sup>Optional</sup> <a name="TargetCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetCompartmentId"></a>

```go
TargetCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_compartment_id CloudMigrationsMigrationPlan#target_compartment_id}.

---

### CloudMigrationsMigrationPlanTimeouts <a name="CloudMigrationsMigrationPlanTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

&cloudmigrationsmigrationplan.CloudMigrationsMigrationPlanTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#create CloudMigrationsMigrationPlan#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#delete CloudMigrationsMigrationPlan#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#update CloudMigrationsMigrationPlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#create CloudMigrationsMigrationPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#delete CloudMigrationsMigrationPlan#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#update CloudMigrationsMigrationPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudMigrationsMigrationPlanMigrationPlanStatsList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.get"></a>

```go
func Get(index *f64) CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.totalEstimatedCost">TotalEstimatedCost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.vmCount">VmCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats">CloudMigrationsMigrationPlanMigrationPlanStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TotalEstimatedCost`<sup>Required</sup> <a name="TotalEstimatedCost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.totalEstimatedCost"></a>

```go
func TotalEstimatedCost() CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList</a>

---

##### `VmCount`<sup>Required</sup> <a name="VmCount" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.vmCount"></a>

```go
func VmCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudMigrationsMigrationPlanMigrationPlanStats
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats">CloudMigrationsMigrationPlanMigrationPlanStats</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get"></a>

```go
func Get(index *f64) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount">GpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour">GpuPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription">GpuPerHourBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb">MemoryAmountGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour">MemoryGbPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription">MemoryGbPerHourBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour">OcpuPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription">OcpuPerHourBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour">TotalPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription">TotalPerHourBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GpuCount`<sup>Required</sup> <a name="GpuCount" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount"></a>

```go
func GpuCount() *f64
```

- *Type:* *f64

---

##### `GpuPerHour`<sup>Required</sup> <a name="GpuPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour"></a>

```go
func GpuPerHour() *f64
```

- *Type:* *f64

---

##### `GpuPerHourBySubscription`<sup>Required</sup> <a name="GpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription"></a>

```go
func GpuPerHourBySubscription() *f64
```

- *Type:* *f64

---

##### `MemoryAmountGb`<sup>Required</sup> <a name="MemoryAmountGb" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb"></a>

```go
func MemoryAmountGb() *f64
```

- *Type:* *f64

---

##### `MemoryGbPerHour`<sup>Required</sup> <a name="MemoryGbPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour"></a>

```go
func MemoryGbPerHour() *f64
```

- *Type:* *f64

---

##### `MemoryGbPerHourBySubscription`<sup>Required</sup> <a name="MemoryGbPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription"></a>

```go
func MemoryGbPerHourBySubscription() *f64
```

- *Type:* *f64

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount"></a>

```go
func OcpuCount() *f64
```

- *Type:* *f64

---

##### `OcpuPerHour`<sup>Required</sup> <a name="OcpuPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour"></a>

```go
func OcpuPerHour() *f64
```

- *Type:* *f64

---

##### `OcpuPerHourBySubscription`<sup>Required</sup> <a name="OcpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription"></a>

```go
func OcpuPerHourBySubscription() *f64
```

- *Type:* *f64

---

##### `TotalPerHour`<sup>Required</sup> <a name="TotalPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour"></a>

```go
func TotalPerHour() *f64
```

- *Type:* *f64

---

##### `TotalPerHourBySubscription`<sup>Required</sup> <a name="TotalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription"></a>

```go
func TotalPerHourBySubscription() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get"></a>

```go
func Get(index *f64) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get"></a>

```go
func Get(index *f64) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour">TotalPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription">TotalPerHourBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalPerHour`<sup>Required</sup> <a name="TotalPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour"></a>

```go
func TotalPerHour() *f64
```

- *Type:* *f64

---

##### `TotalPerHourBySubscription`<sup>Required</sup> <a name="TotalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription"></a>

```go
func TotalPerHourBySubscription() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute">Compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage">OsImage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage">Storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth">TotalEstimationPerMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription">TotalEstimationPerMonthBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute"></a>

```go
func Compute() CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList</a>

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `OsImage`<sup>Required</sup> <a name="OsImage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage"></a>

```go
func OsImage() CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage"></a>

```go
func Storage() CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList</a>

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TotalEstimationPerMonth`<sup>Required</sup> <a name="TotalEstimationPerMonth" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth"></a>

```go
func TotalEstimationPerMonth() *f64
```

- *Type:* *f64

---

##### `TotalEstimationPerMonthBySubscription`<sup>Required</sup> <a name="TotalEstimationPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription"></a>

```go
func TotalEstimationPerMonthBySubscription() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get"></a>

```go
func Get(index *f64) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth">TotalGbPerMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription">TotalGbPerMonthBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes">Volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalGbPerMonth`<sup>Required</sup> <a name="TotalGbPerMonth" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth"></a>

```go
func TotalGbPerMonth() *f64
```

- *Type:* *f64

---

##### `TotalGbPerMonthBySubscription`<sup>Required</sup> <a name="TotalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription"></a>

```go
func TotalGbPerMonthBySubscription() *f64
```

- *Type:* *f64

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes"></a>

```go
func Volumes() CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get"></a>

```go
func Get(index *f64) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb">CapacityGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth">TotalGbPerMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription">TotalGbPerMonthBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb"></a>

```go
func CapacityGb() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `TotalGbPerMonth`<sup>Required</sup> <a name="TotalGbPerMonth" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth"></a>

```go
func TotalGbPerMonth() *f64
```

- *Type:* *f64

---

##### `TotalGbPerMonthBySubscription`<sup>Required</sup> <a name="TotalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription"></a>

```go
func TotalGbPerMonthBySubscription() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes</a>

---


### CloudMigrationsMigrationPlanStrategiesList <a name="CloudMigrationsMigrationPlanStrategiesList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanStrategiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudMigrationsMigrationPlanStrategiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.get"></a>

```go
func Get(index *f64) CloudMigrationsMigrationPlanStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudMigrationsMigrationPlanStrategiesOutputReference <a name="CloudMigrationsMigrationPlanStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanStrategiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudMigrationsMigrationPlanStrategiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetAdjustmentMultiplier">ResetAdjustmentMultiplier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricTimeWindow">ResetMetricTimeWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricType">ResetMetricType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetPercentile">ResetPercentile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdjustmentMultiplier` <a name="ResetAdjustmentMultiplier" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetAdjustmentMultiplier"></a>

```go
func ResetAdjustmentMultiplier()
```

##### `ResetMetricTimeWindow` <a name="ResetMetricTimeWindow" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricTimeWindow"></a>

```go
func ResetMetricTimeWindow()
```

##### `ResetMetricType` <a name="ResetMetricType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricType"></a>

```go
func ResetMetricType()
```

##### `ResetPercentile` <a name="ResetPercentile" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetPercentile"></a>

```go
func ResetPercentile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplierInput">AdjustmentMultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindowInput">MetricTimeWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTypeInput">MetricTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentileInput">PercentileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyTypeInput">StrategyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplier">AdjustmentMultiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindow">MetricTimeWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentile">Percentile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyType">StrategyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdjustmentMultiplierInput`<sup>Optional</sup> <a name="AdjustmentMultiplierInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplierInput"></a>

```go
func AdjustmentMultiplierInput() *f64
```

- *Type:* *f64

---

##### `MetricTimeWindowInput`<sup>Optional</sup> <a name="MetricTimeWindowInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindowInput"></a>

```go
func MetricTimeWindowInput() *string
```

- *Type:* *string

---

##### `MetricTypeInput`<sup>Optional</sup> <a name="MetricTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTypeInput"></a>

```go
func MetricTypeInput() *string
```

- *Type:* *string

---

##### `PercentileInput`<sup>Optional</sup> <a name="PercentileInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentileInput"></a>

```go
func PercentileInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `StrategyTypeInput`<sup>Optional</sup> <a name="StrategyTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyTypeInput"></a>

```go
func StrategyTypeInput() *string
```

- *Type:* *string

---

##### `AdjustmentMultiplier`<sup>Required</sup> <a name="AdjustmentMultiplier" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplier"></a>

```go
func AdjustmentMultiplier() *f64
```

- *Type:* *f64

---

##### `MetricTimeWindow`<sup>Required</sup> <a name="MetricTimeWindow" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindow"></a>

```go
func MetricTimeWindow() *string
```

- *Type:* *string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `Percentile`<sup>Required</sup> <a name="Percentile" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentile"></a>

```go
func Percentile() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyType"></a>

```go
func StrategyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudMigrationsMigrationPlanTargetEnvironmentsList <a name="CloudMigrationsMigrationPlanTargetEnvironmentsList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanTargetEnvironmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudMigrationsMigrationPlanTargetEnvironmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.get"></a>

```go
func Get(index *f64) CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference <a name="CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetDedicatedVmHost">ResetDedicatedVmHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetFaultDomain">ResetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetMsLicense">ResetMsLicense</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetPreferredShapeType">ResetPreferredShapeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetTargetCompartmentId">ResetTargetCompartmentId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetDedicatedVmHost` <a name="ResetDedicatedVmHost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetDedicatedVmHost"></a>

```go
func ResetDedicatedVmHost()
```

##### `ResetFaultDomain` <a name="ResetFaultDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetFaultDomain"></a>

```go
func ResetFaultDomain()
```

##### `ResetMsLicense` <a name="ResetMsLicense" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetMsLicense"></a>

```go
func ResetMsLicense()
```

##### `ResetPreferredShapeType` <a name="ResetPreferredShapeType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetPreferredShapeType"></a>

```go
func ResetPreferredShapeType()
```

##### `ResetTargetCompartmentId` <a name="ResetTargetCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetTargetCompartmentId"></a>

```go
func ResetTargetCompartmentId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHostInput">DedicatedVmHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomainInput">FaultDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicenseInput">MsLicenseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeTypeInput">PreferredShapeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnetInput">SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentIdInput">TargetCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentTypeInput">TargetEnvironmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcnInput">VcnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHost">DedicatedVmHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicense">MsLicense</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeType">PreferredShapeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentId">TargetCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentType">TargetEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcn">Vcn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `DedicatedVmHostInput`<sup>Optional</sup> <a name="DedicatedVmHostInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHostInput"></a>

```go
func DedicatedVmHostInput() *string
```

- *Type:* *string

---

##### `FaultDomainInput`<sup>Optional</sup> <a name="FaultDomainInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomainInput"></a>

```go
func FaultDomainInput() *string
```

- *Type:* *string

---

##### `MsLicenseInput`<sup>Optional</sup> <a name="MsLicenseInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicenseInput"></a>

```go
func MsLicenseInput() *string
```

- *Type:* *string

---

##### `PreferredShapeTypeInput`<sup>Optional</sup> <a name="PreferredShapeTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeTypeInput"></a>

```go
func PreferredShapeTypeInput() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnetInput"></a>

```go
func SubnetInput() *string
```

- *Type:* *string

---

##### `TargetCompartmentIdInput`<sup>Optional</sup> <a name="TargetCompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentIdInput"></a>

```go
func TargetCompartmentIdInput() *string
```

- *Type:* *string

---

##### `TargetEnvironmentTypeInput`<sup>Optional</sup> <a name="TargetEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentTypeInput"></a>

```go
func TargetEnvironmentTypeInput() *string
```

- *Type:* *string

---

##### `VcnInput`<sup>Optional</sup> <a name="VcnInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcnInput"></a>

```go
func VcnInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `DedicatedVmHost`<sup>Required</sup> <a name="DedicatedVmHost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHost"></a>

```go
func DedicatedVmHost() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `MsLicense`<sup>Required</sup> <a name="MsLicense" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicense"></a>

```go
func MsLicense() *string
```

- *Type:* *string

---

##### `PreferredShapeType`<sup>Required</sup> <a name="PreferredShapeType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeType"></a>

```go
func PreferredShapeType() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `TargetCompartmentId`<sup>Required</sup> <a name="TargetCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentId"></a>

```go
func TargetCompartmentId() *string
```

- *Type:* *string

---

##### `TargetEnvironmentType`<sup>Required</sup> <a name="TargetEnvironmentType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentType"></a>

```go
func TargetEnvironmentType() *string
```

- *Type:* *string

---

##### `Vcn`<sup>Required</sup> <a name="Vcn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcn"></a>

```go
func Vcn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudMigrationsMigrationPlanTimeoutsOutputReference <a name="CloudMigrationsMigrationPlanTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationplan"

cloudmigrationsmigrationplan.NewCloudMigrationsMigrationPlanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudMigrationsMigrationPlanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




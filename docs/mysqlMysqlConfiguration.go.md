# `mysqlMysqlConfiguration` Submodule <a name="`mysqlMysqlConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlConfiguration <a name="MysqlMysqlConfiguration" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration oci_mysql_mysql_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

mysqlmysqlconfiguration.NewMysqlMysqlConfiguration(scope Construct, id *string, config MysqlMysqlConfigurationConfig) MysqlMysqlConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig">MysqlMysqlConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig">MysqlMysqlConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables">PutInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetInitVariables">ResetInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetParentConfigurationId">ResetParentConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInitVariables` <a name="PutInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables"></a>

```go
func PutInitVariables(value MysqlMysqlConfigurationInitVariables)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value MysqlMysqlConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

---

##### `PutVariables` <a name="PutVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables"></a>

```go
func PutVariables(value MysqlMysqlConfigurationVariables)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetInitVariables` <a name="ResetInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetInitVariables"></a>

```go
func ResetInitVariables()
```

##### `ResetParentConfigurationId` <a name="ResetParentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetParentConfigurationId"></a>

```go
func ResetParentConfigurationId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVariables` <a name="ResetVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetVariables"></a>

```go
func ResetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

mysqlmysqlconfiguration.MysqlMysqlConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

mysqlmysqlconfiguration.MysqlMysqlConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

mysqlmysqlconfiguration.MysqlMysqlConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

mysqlmysqlconfiguration.MysqlMysqlConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MysqlMysqlConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MysqlMysqlConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariables">InitVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference">MysqlMysqlConfigurationInitVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference">MysqlMysqlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference">MysqlMysqlConfigurationVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariablesInput">InitVariablesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationIdInput">ParentConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeNameInput">ShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variablesInput">VariablesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationId">ParentConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InitVariables`<sup>Required</sup> <a name="InitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariables"></a>

```go
func InitVariables() MysqlMysqlConfigurationInitVariablesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference">MysqlMysqlConfigurationInitVariablesOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeouts"></a>

```go
func Timeouts() MysqlMysqlConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference">MysqlMysqlConfigurationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variables"></a>

```go
func Variables() MysqlMysqlConfigurationVariablesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference">MysqlMysqlConfigurationVariablesOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitVariablesInput`<sup>Optional</sup> <a name="InitVariablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariablesInput"></a>

```go
func InitVariablesInput() MysqlMysqlConfigurationInitVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---

##### `ParentConfigurationIdInput`<sup>Optional</sup> <a name="ParentConfigurationIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationIdInput"></a>

```go
func ParentConfigurationIdInput() *string
```

- *Type:* *string

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeNameInput"></a>

```go
func ShapeNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variablesInput"></a>

```go
func VariablesInput() MysqlMysqlConfigurationVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParentConfigurationId`<sup>Required</sup> <a name="ParentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationId"></a>

```go
func ParentConfigurationId() *string
```

- *Type:* *string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlConfigurationConfig <a name="MysqlMysqlConfigurationConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

&mysqlmysqlconfiguration.MysqlMysqlConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ShapeName: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	InitVariables: github.com/rhizo-co/cdktf-provider-oci-go/oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables,
	ParentConfigurationId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts,
	Variables: github.com/rhizo-co/cdktf-provider-oci-go/oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.shapeName">ShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.initVariables">InitVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | init_variables block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.parentConfigurationId">ParentConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | variables block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}.

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.shapeName"></a>

```go
ShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitVariables`<sup>Optional</sup> <a name="InitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.initVariables"></a>

```go
InitVariables MysqlMysqlConfigurationInitVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

init_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#init_variables MysqlMysqlConfiguration#init_variables}

---

##### `ParentConfigurationId`<sup>Optional</sup> <a name="ParentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.parentConfigurationId"></a>

```go
ParentConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.timeouts"></a>

```go
Timeouts MysqlMysqlConfigurationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#timeouts MysqlMysqlConfiguration#timeouts}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.variables"></a>

```go
Variables MysqlMysqlConfigurationVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#variables MysqlMysqlConfiguration#variables}

---

### MysqlMysqlConfigurationInitVariables <a name="MysqlMysqlConfigurationInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

&mysqlmysqlconfiguration.MysqlMysqlConfigurationInitVariables {
	LowerCaseTableNames: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.property.lowerCaseTableNames">LowerCaseTableNames</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}. |

---

##### `LowerCaseTableNames`<sup>Optional</sup> <a name="LowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.property.lowerCaseTableNames"></a>

```go
LowerCaseTableNames *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}.

---

### MysqlMysqlConfigurationTimeouts <a name="MysqlMysqlConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

&mysqlmysqlconfiguration.MysqlMysqlConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}.

---

### MysqlMysqlConfigurationVariables <a name="MysqlMysqlConfigurationVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

&mysqlmysqlconfiguration.MysqlMysqlConfigurationVariables {
	Autocommit: interface{},
	BigTables: interface{},
	BinlogExpireLogsSeconds: *f64,
	BinlogRowMetadata: *string,
	BinlogRowValueOptions: *string,
	BinlogTransactionCompression: interface{},
	CompletionType: *string,
	ConnectionMemoryChunkSize: *f64,
	ConnectionMemoryLimit: *string,
	ConnectTimeout: *f64,
	CteMaxRecursionDepth: *string,
	DefaultAuthenticationPlugin: *string,
	ForeignKeyChecks: interface{},
	GeneratedRandomPasswordLength: *f64,
	GlobalConnectionMemoryLimit: *string,
	GlobalConnectionMemoryTracking: interface{},
	GroupReplicationConsistency: *string,
	InformationSchemaStatsExpiry: *f64,
	InnodbBufferPoolDumpPct: *f64,
	InnodbBufferPoolInstances: *f64,
	InnodbBufferPoolSize: *string,
	InnodbDdlBufferSize: *string,
	InnodbDdlThreads: *f64,
	InnodbFtEnableStopword: interface{},
	InnodbFtMaxTokenSize: *f64,
	InnodbFtMinTokenSize: *f64,
	InnodbFtNumWordOptimize: *f64,
	InnodbFtResultCacheLimit: *string,
	InnodbFtServerStopwordTable: *string,
	InnodbLockWaitTimeout: *f64,
	InnodbLogWriterThreads: interface{},
	InnodbMaxPurgeLag: *string,
	InnodbMaxPurgeLagDelay: *f64,
	InnodbStatsPersistentSamplePages: *string,
	InnodbStatsTransientSamplePages: *string,
	InteractiveTimeout: *f64,
	LocalInfile: interface{},
	MandatoryRoles: *string,
	MaxAllowedPacket: *f64,
	MaxBinlogCacheSize: *string,
	MaxConnectErrors: *string,
	MaxConnections: *f64,
	MaxExecutionTime: *string,
	MaxHeapTableSize: *string,
	MaxPreparedStmtCount: *f64,
	MysqlFirewallMode: interface{},
	MysqlxConnectTimeout: *f64,
	MysqlxDeflateDefaultCompressionLevel: *f64,
	MysqlxDeflateMaxClientCompressionLevel: *f64,
	MysqlxDocumentIdUniquePrefix: *f64,
	MysqlxEnableHelloNotice: interface{},
	MysqlxIdleWorkerThreadTimeout: *f64,
	MysqlxInteractiveTimeout: *f64,
	MysqlxLz4DefaultCompressionLevel: *f64,
	MysqlxLz4MaxClientCompressionLevel: *f64,
	MysqlxMaxAllowedPacket: *f64,
	MysqlxMinWorkerThreads: *f64,
	MysqlxReadTimeout: *f64,
	MysqlxWaitTimeout: *f64,
	MysqlxWriteTimeout: *f64,
	MysqlxZstdDefaultCompressionLevel: *f64,
	MysqlxZstdMaxClientCompressionLevel: *f64,
	MysqlZstdDefaultCompressionLevel: *f64,
	NetReadTimeout: *f64,
	NetWriteTimeout: *f64,
	ParserMaxMemSize: *string,
	QueryAllocBlockSize: *string,
	QueryPreallocSize: *string,
	RegexpTimeLimit: *f64,
	SortBufferSize: *string,
	SqlMode: *string,
	SqlRequirePrimaryKey: interface{},
	SqlWarnings: interface{},
	ThreadPoolDedicatedListeners: interface{},
	ThreadPoolMaxTransactionsLimit: *f64,
	TimeZone: *string,
	TmpTableSize: *string,
	TransactionIsolation: *string,
	WaitTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.autocommit">Autocommit</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.bigTables">BigTables</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogExpireLogsSeconds">BinlogExpireLogsSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowMetadata">BinlogRowMetadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowValueOptions">BinlogRowValueOptions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogTransactionCompression">BinlogTransactionCompression</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.completionType">CompletionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryChunkSize">ConnectionMemoryChunkSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryLimit">ConnectionMemoryLimit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.cteMaxRecursionDepth">CteMaxRecursionDepth</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.defaultAuthenticationPlugin">DefaultAuthenticationPlugin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.foreignKeyChecks">ForeignKeyChecks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.generatedRandomPasswordLength">GeneratedRandomPasswordLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryLimit">GlobalConnectionMemoryLimit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryTracking">GlobalConnectionMemoryTracking</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.groupReplicationConsistency">GroupReplicationConsistency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolDumpPct">InnodbBufferPoolDumpPct</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolInstances">InnodbBufferPoolInstances</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolSize">InnodbBufferPoolSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlBufferSize">InnodbDdlBufferSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlThreads">InnodbDdlThreads</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtEnableStopword">InnodbFtEnableStopword</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMaxTokenSize">InnodbFtMaxTokenSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtNumWordOptimize">InnodbFtNumWordOptimize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtResultCacheLimit">InnodbFtResultCacheLimit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLogWriterThreads">InnodbLogWriterThreads</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLag">InnodbMaxPurgeLag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLagDelay">InnodbMaxPurgeLagDelay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsPersistentSamplePages">InnodbStatsPersistentSamplePages</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsTransientSamplePages">InnodbStatsTransientSamplePages</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.localInfile">LocalInfile</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mandatoryRoles">MandatoryRoles</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxBinlogCacheSize">MaxBinlogCacheSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnectErrors">MaxConnectErrors</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxExecutionTime">MaxExecutionTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxPreparedStmtCount">MaxPreparedStmtCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlFirewallMode">MysqlFirewallMode</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxConnectTimeout">MysqlxConnectTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateDefaultCompressionLevel">MysqlxDeflateDefaultCompressionLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateMaxClientCompressionLevel">MysqlxDeflateMaxClientCompressionLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDocumentIdUniquePrefix">MysqlxDocumentIdUniquePrefix</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxEnableHelloNotice">MysqlxEnableHelloNotice</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxIdleWorkerThreadTimeout">MysqlxIdleWorkerThreadTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxInteractiveTimeout">MysqlxInteractiveTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4DefaultCompressionLevel">MysqlxLz4DefaultCompressionLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4MaxClientCompressionLevel">MysqlxLz4MaxClientCompressionLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMaxAllowedPacket">MysqlxMaxAllowedPacket</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMinWorkerThreads">MysqlxMinWorkerThreads</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxReadTimeout">MysqlxReadTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWaitTimeout">MysqlxWaitTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWriteTimeout">MysqlxWriteTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdDefaultCompressionLevel">MysqlxZstdDefaultCompressionLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdMaxClientCompressionLevel">MysqlxZstdMaxClientCompressionLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlZstdDefaultCompressionLevel">MysqlZstdDefaultCompressionLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netReadTimeout">NetReadTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.parserMaxMemSize">ParserMaxMemSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryAllocBlockSize">QueryAllocBlockSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryPreallocSize">QueryPreallocSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.regexpTimeLimit">RegexpTimeLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sortBufferSize">SortBufferSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlMode">SqlMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlWarnings">SqlWarnings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolDedicatedListeners">ThreadPoolDedicatedListeners</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolMaxTransactionsLimit">ThreadPoolMaxTransactionsLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.tmpTableSize">TmpTableSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.transactionIsolation">TransactionIsolation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.waitTimeout">WaitTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}. |

---

##### `Autocommit`<sup>Optional</sup> <a name="Autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.autocommit"></a>

```go
Autocommit interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}.

---

##### `BigTables`<sup>Optional</sup> <a name="BigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.bigTables"></a>

```go
BigTables interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}.

---

##### `BinlogExpireLogsSeconds`<sup>Optional</sup> <a name="BinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogExpireLogsSeconds"></a>

```go
BinlogExpireLogsSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}.

---

##### `BinlogRowMetadata`<sup>Optional</sup> <a name="BinlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowMetadata"></a>

```go
BinlogRowMetadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}.

---

##### `BinlogRowValueOptions`<sup>Optional</sup> <a name="BinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowValueOptions"></a>

```go
BinlogRowValueOptions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}.

---

##### `BinlogTransactionCompression`<sup>Optional</sup> <a name="BinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogTransactionCompression"></a>

```go
BinlogTransactionCompression interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}.

---

##### `CompletionType`<sup>Optional</sup> <a name="CompletionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.completionType"></a>

```go
CompletionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}.

---

##### `ConnectionMemoryChunkSize`<sup>Optional</sup> <a name="ConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryChunkSize"></a>

```go
ConnectionMemoryChunkSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}.

---

##### `ConnectionMemoryLimit`<sup>Optional</sup> <a name="ConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryLimit"></a>

```go
ConnectionMemoryLimit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}.

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectTimeout"></a>

```go
ConnectTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}.

---

##### `CteMaxRecursionDepth`<sup>Optional</sup> <a name="CteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.cteMaxRecursionDepth"></a>

```go
CteMaxRecursionDepth *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}.

---

##### `DefaultAuthenticationPlugin`<sup>Optional</sup> <a name="DefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.defaultAuthenticationPlugin"></a>

```go
DefaultAuthenticationPlugin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}.

---

##### `ForeignKeyChecks`<sup>Optional</sup> <a name="ForeignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.foreignKeyChecks"></a>

```go
ForeignKeyChecks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}.

---

##### `GeneratedRandomPasswordLength`<sup>Optional</sup> <a name="GeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.generatedRandomPasswordLength"></a>

```go
GeneratedRandomPasswordLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}.

---

##### `GlobalConnectionMemoryLimit`<sup>Optional</sup> <a name="GlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryLimit"></a>

```go
GlobalConnectionMemoryLimit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}.

---

##### `GlobalConnectionMemoryTracking`<sup>Optional</sup> <a name="GlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryTracking"></a>

```go
GlobalConnectionMemoryTracking interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}.

---

##### `GroupReplicationConsistency`<sup>Optional</sup> <a name="GroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.groupReplicationConsistency"></a>

```go
GroupReplicationConsistency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}.

---

##### `InformationSchemaStatsExpiry`<sup>Optional</sup> <a name="InformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.informationSchemaStatsExpiry"></a>

```go
InformationSchemaStatsExpiry *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}.

---

##### `InnodbBufferPoolDumpPct`<sup>Optional</sup> <a name="InnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolDumpPct"></a>

```go
InnodbBufferPoolDumpPct *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}.

---

##### `InnodbBufferPoolInstances`<sup>Optional</sup> <a name="InnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolInstances"></a>

```go
InnodbBufferPoolInstances *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}.

---

##### `InnodbBufferPoolSize`<sup>Optional</sup> <a name="InnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolSize"></a>

```go
InnodbBufferPoolSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}.

---

##### `InnodbDdlBufferSize`<sup>Optional</sup> <a name="InnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlBufferSize"></a>

```go
InnodbDdlBufferSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}.

---

##### `InnodbDdlThreads`<sup>Optional</sup> <a name="InnodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlThreads"></a>

```go
InnodbDdlThreads *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}.

---

##### `InnodbFtEnableStopword`<sup>Optional</sup> <a name="InnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtEnableStopword"></a>

```go
InnodbFtEnableStopword interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}.

---

##### `InnodbFtMaxTokenSize`<sup>Optional</sup> <a name="InnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMaxTokenSize"></a>

```go
InnodbFtMaxTokenSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}.

---

##### `InnodbFtMinTokenSize`<sup>Optional</sup> <a name="InnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMinTokenSize"></a>

```go
InnodbFtMinTokenSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}.

---

##### `InnodbFtNumWordOptimize`<sup>Optional</sup> <a name="InnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtNumWordOptimize"></a>

```go
InnodbFtNumWordOptimize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}.

---

##### `InnodbFtResultCacheLimit`<sup>Optional</sup> <a name="InnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtResultCacheLimit"></a>

```go
InnodbFtResultCacheLimit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}.

---

##### `InnodbFtServerStopwordTable`<sup>Optional</sup> <a name="InnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtServerStopwordTable"></a>

```go
InnodbFtServerStopwordTable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}.

---

##### `InnodbLockWaitTimeout`<sup>Optional</sup> <a name="InnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLockWaitTimeout"></a>

```go
InnodbLockWaitTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}.

---

##### `InnodbLogWriterThreads`<sup>Optional</sup> <a name="InnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLogWriterThreads"></a>

```go
InnodbLogWriterThreads interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}.

---

##### `InnodbMaxPurgeLag`<sup>Optional</sup> <a name="InnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLag"></a>

```go
InnodbMaxPurgeLag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}.

---

##### `InnodbMaxPurgeLagDelay`<sup>Optional</sup> <a name="InnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLagDelay"></a>

```go
InnodbMaxPurgeLagDelay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}.

---

##### `InnodbStatsPersistentSamplePages`<sup>Optional</sup> <a name="InnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsPersistentSamplePages"></a>

```go
InnodbStatsPersistentSamplePages *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}.

---

##### `InnodbStatsTransientSamplePages`<sup>Optional</sup> <a name="InnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsTransientSamplePages"></a>

```go
InnodbStatsTransientSamplePages *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}.

---

##### `InteractiveTimeout`<sup>Optional</sup> <a name="InteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.interactiveTimeout"></a>

```go
InteractiveTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}.

---

##### `LocalInfile`<sup>Optional</sup> <a name="LocalInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.localInfile"></a>

```go
LocalInfile interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}.

---

##### `MandatoryRoles`<sup>Optional</sup> <a name="MandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mandatoryRoles"></a>

```go
MandatoryRoles *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}.

---

##### `MaxAllowedPacket`<sup>Optional</sup> <a name="MaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxAllowedPacket"></a>

```go
MaxAllowedPacket *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}.

---

##### `MaxBinlogCacheSize`<sup>Optional</sup> <a name="MaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxBinlogCacheSize"></a>

```go
MaxBinlogCacheSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}.

---

##### `MaxConnectErrors`<sup>Optional</sup> <a name="MaxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnectErrors"></a>

```go
MaxConnectErrors *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}.

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnections"></a>

```go
MaxConnections *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}.

---

##### `MaxExecutionTime`<sup>Optional</sup> <a name="MaxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxExecutionTime"></a>

```go
MaxExecutionTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}.

---

##### `MaxHeapTableSize`<sup>Optional</sup> <a name="MaxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxHeapTableSize"></a>

```go
MaxHeapTableSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}.

---

##### `MaxPreparedStmtCount`<sup>Optional</sup> <a name="MaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxPreparedStmtCount"></a>

```go
MaxPreparedStmtCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}.

---

##### `MysqlFirewallMode`<sup>Optional</sup> <a name="MysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlFirewallMode"></a>

```go
MysqlFirewallMode interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}.

---

##### `MysqlxConnectTimeout`<sup>Optional</sup> <a name="MysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxConnectTimeout"></a>

```go
MysqlxConnectTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}.

---

##### `MysqlxDeflateDefaultCompressionLevel`<sup>Optional</sup> <a name="MysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateDefaultCompressionLevel"></a>

```go
MysqlxDeflateDefaultCompressionLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}.

---

##### `MysqlxDeflateMaxClientCompressionLevel`<sup>Optional</sup> <a name="MysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```go
MysqlxDeflateMaxClientCompressionLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}.

---

##### `MysqlxDocumentIdUniquePrefix`<sup>Optional</sup> <a name="MysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDocumentIdUniquePrefix"></a>

```go
MysqlxDocumentIdUniquePrefix *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}.

---

##### `MysqlxEnableHelloNotice`<sup>Optional</sup> <a name="MysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxEnableHelloNotice"></a>

```go
MysqlxEnableHelloNotice interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}.

---

##### `MysqlxIdleWorkerThreadTimeout`<sup>Optional</sup> <a name="MysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxIdleWorkerThreadTimeout"></a>

```go
MysqlxIdleWorkerThreadTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}.

---

##### `MysqlxInteractiveTimeout`<sup>Optional</sup> <a name="MysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxInteractiveTimeout"></a>

```go
MysqlxInteractiveTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}.

---

##### `MysqlxLz4DefaultCompressionLevel`<sup>Optional</sup> <a name="MysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4DefaultCompressionLevel"></a>

```go
MysqlxLz4DefaultCompressionLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}.

---

##### `MysqlxLz4MaxClientCompressionLevel`<sup>Optional</sup> <a name="MysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4MaxClientCompressionLevel"></a>

```go
MysqlxLz4MaxClientCompressionLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}.

---

##### `MysqlxMaxAllowedPacket`<sup>Optional</sup> <a name="MysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMaxAllowedPacket"></a>

```go
MysqlxMaxAllowedPacket *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}.

---

##### `MysqlxMinWorkerThreads`<sup>Optional</sup> <a name="MysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMinWorkerThreads"></a>

```go
MysqlxMinWorkerThreads *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}.

---

##### `MysqlxReadTimeout`<sup>Optional</sup> <a name="MysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxReadTimeout"></a>

```go
MysqlxReadTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}.

---

##### `MysqlxWaitTimeout`<sup>Optional</sup> <a name="MysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWaitTimeout"></a>

```go
MysqlxWaitTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}.

---

##### `MysqlxWriteTimeout`<sup>Optional</sup> <a name="MysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWriteTimeout"></a>

```go
MysqlxWriteTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}.

---

##### `MysqlxZstdDefaultCompressionLevel`<sup>Optional</sup> <a name="MysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdDefaultCompressionLevel"></a>

```go
MysqlxZstdDefaultCompressionLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}.

---

##### `MysqlxZstdMaxClientCompressionLevel`<sup>Optional</sup> <a name="MysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdMaxClientCompressionLevel"></a>

```go
MysqlxZstdMaxClientCompressionLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}.

---

##### `MysqlZstdDefaultCompressionLevel`<sup>Optional</sup> <a name="MysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlZstdDefaultCompressionLevel"></a>

```go
MysqlZstdDefaultCompressionLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}.

---

##### `NetReadTimeout`<sup>Optional</sup> <a name="NetReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netReadTimeout"></a>

```go
NetReadTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}.

---

##### `NetWriteTimeout`<sup>Optional</sup> <a name="NetWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netWriteTimeout"></a>

```go
NetWriteTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}.

---

##### `ParserMaxMemSize`<sup>Optional</sup> <a name="ParserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.parserMaxMemSize"></a>

```go
ParserMaxMemSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}.

---

##### `QueryAllocBlockSize`<sup>Optional</sup> <a name="QueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryAllocBlockSize"></a>

```go
QueryAllocBlockSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}.

---

##### `QueryPreallocSize`<sup>Optional</sup> <a name="QueryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryPreallocSize"></a>

```go
QueryPreallocSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}.

---

##### `RegexpTimeLimit`<sup>Optional</sup> <a name="RegexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.regexpTimeLimit"></a>

```go
RegexpTimeLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}.

---

##### `SortBufferSize`<sup>Optional</sup> <a name="SortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sortBufferSize"></a>

```go
SortBufferSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}.

---

##### `SqlMode`<sup>Optional</sup> <a name="SqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlMode"></a>

```go
SqlMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}.

---

##### `SqlRequirePrimaryKey`<sup>Optional</sup> <a name="SqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlRequirePrimaryKey"></a>

```go
SqlRequirePrimaryKey interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}.

---

##### `SqlWarnings`<sup>Optional</sup> <a name="SqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlWarnings"></a>

```go
SqlWarnings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}.

---

##### `ThreadPoolDedicatedListeners`<sup>Optional</sup> <a name="ThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolDedicatedListeners"></a>

```go
ThreadPoolDedicatedListeners interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}.

---

##### `ThreadPoolMaxTransactionsLimit`<sup>Optional</sup> <a name="ThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolMaxTransactionsLimit"></a>

```go
ThreadPoolMaxTransactionsLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}.

---

##### `TmpTableSize`<sup>Optional</sup> <a name="TmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.tmpTableSize"></a>

```go
TmpTableSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}.

---

##### `TransactionIsolation`<sup>Optional</sup> <a name="TransactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.transactionIsolation"></a>

```go
TransactionIsolation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}.

---

##### `WaitTimeout`<sup>Optional</sup> <a name="WaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.waitTimeout"></a>

```go
WaitTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlConfigurationInitVariablesOutputReference <a name="MysqlMysqlConfigurationInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

mysqlmysqlconfiguration.NewMysqlMysqlConfigurationInitVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MysqlMysqlConfigurationInitVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resetLowerCaseTableNames">ResetLowerCaseTableNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLowerCaseTableNames` <a name="ResetLowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resetLowerCaseTableNames"></a>

```go
func ResetLowerCaseTableNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNamesInput">LowerCaseTableNamesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames">LowerCaseTableNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LowerCaseTableNamesInput`<sup>Optional</sup> <a name="LowerCaseTableNamesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNamesInput"></a>

```go
func LowerCaseTableNamesInput() *string
```

- *Type:* *string

---

##### `LowerCaseTableNames`<sup>Required</sup> <a name="LowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```go
func LowerCaseTableNames() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() MysqlMysqlConfigurationInitVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---


### MysqlMysqlConfigurationTimeoutsOutputReference <a name="MysqlMysqlConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

mysqlmysqlconfiguration.NewMysqlMysqlConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MysqlMysqlConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MysqlMysqlConfigurationVariablesOutputReference <a name="MysqlMysqlConfigurationVariablesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mysqlmysqlconfiguration"

mysqlmysqlconfiguration.NewMysqlMysqlConfigurationVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MysqlMysqlConfigurationVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetAutocommit">ResetAutocommit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBigTables">ResetBigTables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogExpireLogsSeconds">ResetBinlogExpireLogsSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowMetadata">ResetBinlogRowMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowValueOptions">ResetBinlogRowValueOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogTransactionCompression">ResetBinlogTransactionCompression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCompletionType">ResetCompletionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryChunkSize">ResetConnectionMemoryChunkSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryLimit">ResetConnectionMemoryLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCteMaxRecursionDepth">ResetCteMaxRecursionDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetDefaultAuthenticationPlugin">ResetDefaultAuthenticationPlugin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetForeignKeyChecks">ResetForeignKeyChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGeneratedRandomPasswordLength">ResetGeneratedRandomPasswordLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryLimit">ResetGlobalConnectionMemoryLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryTracking">ResetGlobalConnectionMemoryTracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGroupReplicationConsistency">ResetGroupReplicationConsistency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInformationSchemaStatsExpiry">ResetInformationSchemaStatsExpiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolDumpPct">ResetInnodbBufferPoolDumpPct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolInstances">ResetInnodbBufferPoolInstances</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolSize">ResetInnodbBufferPoolSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlBufferSize">ResetInnodbDdlBufferSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlThreads">ResetInnodbDdlThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtEnableStopword">ResetInnodbFtEnableStopword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMaxTokenSize">ResetInnodbFtMaxTokenSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMinTokenSize">ResetInnodbFtMinTokenSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtNumWordOptimize">ResetInnodbFtNumWordOptimize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtResultCacheLimit">ResetInnodbFtResultCacheLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtServerStopwordTable">ResetInnodbFtServerStopwordTable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLockWaitTimeout">ResetInnodbLockWaitTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLogWriterThreads">ResetInnodbLogWriterThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLag">ResetInnodbMaxPurgeLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLagDelay">ResetInnodbMaxPurgeLagDelay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsPersistentSamplePages">ResetInnodbStatsPersistentSamplePages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsTransientSamplePages">ResetInnodbStatsTransientSamplePages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInteractiveTimeout">ResetInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetLocalInfile">ResetLocalInfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMandatoryRoles">ResetMandatoryRoles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxAllowedPacket">ResetMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxBinlogCacheSize">ResetMaxBinlogCacheSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnectErrors">ResetMaxConnectErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxExecutionTime">ResetMaxExecutionTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxHeapTableSize">ResetMaxHeapTableSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxPreparedStmtCount">ResetMaxPreparedStmtCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlFirewallMode">ResetMysqlFirewallMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxConnectTimeout">ResetMysqlxConnectTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateDefaultCompressionLevel">ResetMysqlxDeflateDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateMaxClientCompressionLevel">ResetMysqlxDeflateMaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDocumentIdUniquePrefix">ResetMysqlxDocumentIdUniquePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxEnableHelloNotice">ResetMysqlxEnableHelloNotice</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxIdleWorkerThreadTimeout">ResetMysqlxIdleWorkerThreadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxInteractiveTimeout">ResetMysqlxInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4DefaultCompressionLevel">ResetMysqlxLz4DefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4MaxClientCompressionLevel">ResetMysqlxLz4MaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMaxAllowedPacket">ResetMysqlxMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMinWorkerThreads">ResetMysqlxMinWorkerThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxReadTimeout">ResetMysqlxReadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWaitTimeout">ResetMysqlxWaitTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWriteTimeout">ResetMysqlxWriteTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdDefaultCompressionLevel">ResetMysqlxZstdDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdMaxClientCompressionLevel">ResetMysqlxZstdMaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlZstdDefaultCompressionLevel">ResetMysqlZstdDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetReadTimeout">ResetNetReadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetWriteTimeout">ResetNetWriteTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetParserMaxMemSize">ResetParserMaxMemSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryAllocBlockSize">ResetQueryAllocBlockSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryPreallocSize">ResetQueryPreallocSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetRegexpTimeLimit">ResetRegexpTimeLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSortBufferSize">ResetSortBufferSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlMode">ResetSqlMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlRequirePrimaryKey">ResetSqlRequirePrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlWarnings">ResetSqlWarnings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolDedicatedListeners">ResetThreadPoolDedicatedListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolMaxTransactionsLimit">ResetThreadPoolMaxTransactionsLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTmpTableSize">ResetTmpTableSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTransactionIsolation">ResetTransactionIsolation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetWaitTimeout">ResetWaitTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutocommit` <a name="ResetAutocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetAutocommit"></a>

```go
func ResetAutocommit()
```

##### `ResetBigTables` <a name="ResetBigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBigTables"></a>

```go
func ResetBigTables()
```

##### `ResetBinlogExpireLogsSeconds` <a name="ResetBinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogExpireLogsSeconds"></a>

```go
func ResetBinlogExpireLogsSeconds()
```

##### `ResetBinlogRowMetadata` <a name="ResetBinlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowMetadata"></a>

```go
func ResetBinlogRowMetadata()
```

##### `ResetBinlogRowValueOptions` <a name="ResetBinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowValueOptions"></a>

```go
func ResetBinlogRowValueOptions()
```

##### `ResetBinlogTransactionCompression` <a name="ResetBinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogTransactionCompression"></a>

```go
func ResetBinlogTransactionCompression()
```

##### `ResetCompletionType` <a name="ResetCompletionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCompletionType"></a>

```go
func ResetCompletionType()
```

##### `ResetConnectionMemoryChunkSize` <a name="ResetConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryChunkSize"></a>

```go
func ResetConnectionMemoryChunkSize()
```

##### `ResetConnectionMemoryLimit` <a name="ResetConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryLimit"></a>

```go
func ResetConnectionMemoryLimit()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetCteMaxRecursionDepth` <a name="ResetCteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCteMaxRecursionDepth"></a>

```go
func ResetCteMaxRecursionDepth()
```

##### `ResetDefaultAuthenticationPlugin` <a name="ResetDefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetDefaultAuthenticationPlugin"></a>

```go
func ResetDefaultAuthenticationPlugin()
```

##### `ResetForeignKeyChecks` <a name="ResetForeignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetForeignKeyChecks"></a>

```go
func ResetForeignKeyChecks()
```

##### `ResetGeneratedRandomPasswordLength` <a name="ResetGeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGeneratedRandomPasswordLength"></a>

```go
func ResetGeneratedRandomPasswordLength()
```

##### `ResetGlobalConnectionMemoryLimit` <a name="ResetGlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryLimit"></a>

```go
func ResetGlobalConnectionMemoryLimit()
```

##### `ResetGlobalConnectionMemoryTracking` <a name="ResetGlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryTracking"></a>

```go
func ResetGlobalConnectionMemoryTracking()
```

##### `ResetGroupReplicationConsistency` <a name="ResetGroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGroupReplicationConsistency"></a>

```go
func ResetGroupReplicationConsistency()
```

##### `ResetInformationSchemaStatsExpiry` <a name="ResetInformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInformationSchemaStatsExpiry"></a>

```go
func ResetInformationSchemaStatsExpiry()
```

##### `ResetInnodbBufferPoolDumpPct` <a name="ResetInnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolDumpPct"></a>

```go
func ResetInnodbBufferPoolDumpPct()
```

##### `ResetInnodbBufferPoolInstances` <a name="ResetInnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolInstances"></a>

```go
func ResetInnodbBufferPoolInstances()
```

##### `ResetInnodbBufferPoolSize` <a name="ResetInnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolSize"></a>

```go
func ResetInnodbBufferPoolSize()
```

##### `ResetInnodbDdlBufferSize` <a name="ResetInnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlBufferSize"></a>

```go
func ResetInnodbDdlBufferSize()
```

##### `ResetInnodbDdlThreads` <a name="ResetInnodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlThreads"></a>

```go
func ResetInnodbDdlThreads()
```

##### `ResetInnodbFtEnableStopword` <a name="ResetInnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtEnableStopword"></a>

```go
func ResetInnodbFtEnableStopword()
```

##### `ResetInnodbFtMaxTokenSize` <a name="ResetInnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMaxTokenSize"></a>

```go
func ResetInnodbFtMaxTokenSize()
```

##### `ResetInnodbFtMinTokenSize` <a name="ResetInnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMinTokenSize"></a>

```go
func ResetInnodbFtMinTokenSize()
```

##### `ResetInnodbFtNumWordOptimize` <a name="ResetInnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtNumWordOptimize"></a>

```go
func ResetInnodbFtNumWordOptimize()
```

##### `ResetInnodbFtResultCacheLimit` <a name="ResetInnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtResultCacheLimit"></a>

```go
func ResetInnodbFtResultCacheLimit()
```

##### `ResetInnodbFtServerStopwordTable` <a name="ResetInnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtServerStopwordTable"></a>

```go
func ResetInnodbFtServerStopwordTable()
```

##### `ResetInnodbLockWaitTimeout` <a name="ResetInnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLockWaitTimeout"></a>

```go
func ResetInnodbLockWaitTimeout()
```

##### `ResetInnodbLogWriterThreads` <a name="ResetInnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLogWriterThreads"></a>

```go
func ResetInnodbLogWriterThreads()
```

##### `ResetInnodbMaxPurgeLag` <a name="ResetInnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLag"></a>

```go
func ResetInnodbMaxPurgeLag()
```

##### `ResetInnodbMaxPurgeLagDelay` <a name="ResetInnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLagDelay"></a>

```go
func ResetInnodbMaxPurgeLagDelay()
```

##### `ResetInnodbStatsPersistentSamplePages` <a name="ResetInnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsPersistentSamplePages"></a>

```go
func ResetInnodbStatsPersistentSamplePages()
```

##### `ResetInnodbStatsTransientSamplePages` <a name="ResetInnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsTransientSamplePages"></a>

```go
func ResetInnodbStatsTransientSamplePages()
```

##### `ResetInteractiveTimeout` <a name="ResetInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInteractiveTimeout"></a>

```go
func ResetInteractiveTimeout()
```

##### `ResetLocalInfile` <a name="ResetLocalInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetLocalInfile"></a>

```go
func ResetLocalInfile()
```

##### `ResetMandatoryRoles` <a name="ResetMandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMandatoryRoles"></a>

```go
func ResetMandatoryRoles()
```

##### `ResetMaxAllowedPacket` <a name="ResetMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxAllowedPacket"></a>

```go
func ResetMaxAllowedPacket()
```

##### `ResetMaxBinlogCacheSize` <a name="ResetMaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxBinlogCacheSize"></a>

```go
func ResetMaxBinlogCacheSize()
```

##### `ResetMaxConnectErrors` <a name="ResetMaxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnectErrors"></a>

```go
func ResetMaxConnectErrors()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnections"></a>

```go
func ResetMaxConnections()
```

##### `ResetMaxExecutionTime` <a name="ResetMaxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxExecutionTime"></a>

```go
func ResetMaxExecutionTime()
```

##### `ResetMaxHeapTableSize` <a name="ResetMaxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxHeapTableSize"></a>

```go
func ResetMaxHeapTableSize()
```

##### `ResetMaxPreparedStmtCount` <a name="ResetMaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxPreparedStmtCount"></a>

```go
func ResetMaxPreparedStmtCount()
```

##### `ResetMysqlFirewallMode` <a name="ResetMysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlFirewallMode"></a>

```go
func ResetMysqlFirewallMode()
```

##### `ResetMysqlxConnectTimeout` <a name="ResetMysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxConnectTimeout"></a>

```go
func ResetMysqlxConnectTimeout()
```

##### `ResetMysqlxDeflateDefaultCompressionLevel` <a name="ResetMysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateDefaultCompressionLevel"></a>

```go
func ResetMysqlxDeflateDefaultCompressionLevel()
```

##### `ResetMysqlxDeflateMaxClientCompressionLevel` <a name="ResetMysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateMaxClientCompressionLevel"></a>

```go
func ResetMysqlxDeflateMaxClientCompressionLevel()
```

##### `ResetMysqlxDocumentIdUniquePrefix` <a name="ResetMysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDocumentIdUniquePrefix"></a>

```go
func ResetMysqlxDocumentIdUniquePrefix()
```

##### `ResetMysqlxEnableHelloNotice` <a name="ResetMysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxEnableHelloNotice"></a>

```go
func ResetMysqlxEnableHelloNotice()
```

##### `ResetMysqlxIdleWorkerThreadTimeout` <a name="ResetMysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxIdleWorkerThreadTimeout"></a>

```go
func ResetMysqlxIdleWorkerThreadTimeout()
```

##### `ResetMysqlxInteractiveTimeout` <a name="ResetMysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxInteractiveTimeout"></a>

```go
func ResetMysqlxInteractiveTimeout()
```

##### `ResetMysqlxLz4DefaultCompressionLevel` <a name="ResetMysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4DefaultCompressionLevel"></a>

```go
func ResetMysqlxLz4DefaultCompressionLevel()
```

##### `ResetMysqlxLz4MaxClientCompressionLevel` <a name="ResetMysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4MaxClientCompressionLevel"></a>

```go
func ResetMysqlxLz4MaxClientCompressionLevel()
```

##### `ResetMysqlxMaxAllowedPacket` <a name="ResetMysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMaxAllowedPacket"></a>

```go
func ResetMysqlxMaxAllowedPacket()
```

##### `ResetMysqlxMinWorkerThreads` <a name="ResetMysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMinWorkerThreads"></a>

```go
func ResetMysqlxMinWorkerThreads()
```

##### `ResetMysqlxReadTimeout` <a name="ResetMysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxReadTimeout"></a>

```go
func ResetMysqlxReadTimeout()
```

##### `ResetMysqlxWaitTimeout` <a name="ResetMysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWaitTimeout"></a>

```go
func ResetMysqlxWaitTimeout()
```

##### `ResetMysqlxWriteTimeout` <a name="ResetMysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWriteTimeout"></a>

```go
func ResetMysqlxWriteTimeout()
```

##### `ResetMysqlxZstdDefaultCompressionLevel` <a name="ResetMysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdDefaultCompressionLevel"></a>

```go
func ResetMysqlxZstdDefaultCompressionLevel()
```

##### `ResetMysqlxZstdMaxClientCompressionLevel` <a name="ResetMysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdMaxClientCompressionLevel"></a>

```go
func ResetMysqlxZstdMaxClientCompressionLevel()
```

##### `ResetMysqlZstdDefaultCompressionLevel` <a name="ResetMysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlZstdDefaultCompressionLevel"></a>

```go
func ResetMysqlZstdDefaultCompressionLevel()
```

##### `ResetNetReadTimeout` <a name="ResetNetReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetReadTimeout"></a>

```go
func ResetNetReadTimeout()
```

##### `ResetNetWriteTimeout` <a name="ResetNetWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetWriteTimeout"></a>

```go
func ResetNetWriteTimeout()
```

##### `ResetParserMaxMemSize` <a name="ResetParserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetParserMaxMemSize"></a>

```go
func ResetParserMaxMemSize()
```

##### `ResetQueryAllocBlockSize` <a name="ResetQueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryAllocBlockSize"></a>

```go
func ResetQueryAllocBlockSize()
```

##### `ResetQueryPreallocSize` <a name="ResetQueryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryPreallocSize"></a>

```go
func ResetQueryPreallocSize()
```

##### `ResetRegexpTimeLimit` <a name="ResetRegexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetRegexpTimeLimit"></a>

```go
func ResetRegexpTimeLimit()
```

##### `ResetSortBufferSize` <a name="ResetSortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSortBufferSize"></a>

```go
func ResetSortBufferSize()
```

##### `ResetSqlMode` <a name="ResetSqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlMode"></a>

```go
func ResetSqlMode()
```

##### `ResetSqlRequirePrimaryKey` <a name="ResetSqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlRequirePrimaryKey"></a>

```go
func ResetSqlRequirePrimaryKey()
```

##### `ResetSqlWarnings` <a name="ResetSqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlWarnings"></a>

```go
func ResetSqlWarnings()
```

##### `ResetThreadPoolDedicatedListeners` <a name="ResetThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolDedicatedListeners"></a>

```go
func ResetThreadPoolDedicatedListeners()
```

##### `ResetThreadPoolMaxTransactionsLimit` <a name="ResetThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolMaxTransactionsLimit"></a>

```go
func ResetThreadPoolMaxTransactionsLimit()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```

##### `ResetTmpTableSize` <a name="ResetTmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTmpTableSize"></a>

```go
func ResetTmpTableSize()
```

##### `ResetTransactionIsolation` <a name="ResetTransactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTransactionIsolation"></a>

```go
func ResetTransactionIsolation()
```

##### `ResetWaitTimeout` <a name="ResetWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetWaitTimeout"></a>

```go
func ResetWaitTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommitInput">AutocommitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTablesInput">BigTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSecondsInput">BinlogExpireLogsSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadataInput">BinlogRowMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptionsInput">BinlogRowValueOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompressionInput">BinlogTransactionCompressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionTypeInput">CompletionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSizeInput">ConnectionMemoryChunkSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimitInput">ConnectionMemoryLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepthInput">CteMaxRecursionDepthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPluginInput">DefaultAuthenticationPluginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecksInput">ForeignKeyChecksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLengthInput">GeneratedRandomPasswordLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimitInput">GlobalConnectionMemoryLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTrackingInput">GlobalConnectionMemoryTrackingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistencyInput">GroupReplicationConsistencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiryInput">InformationSchemaStatsExpiryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPctInput">InnodbBufferPoolDumpPctInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstancesInput">InnodbBufferPoolInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSizeInput">InnodbBufferPoolSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSizeInput">InnodbDdlBufferSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreadsInput">InnodbDdlThreadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopwordInput">InnodbFtEnableStopwordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSizeInput">InnodbFtMaxTokenSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSizeInput">InnodbFtMinTokenSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimizeInput">InnodbFtNumWordOptimizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimitInput">InnodbFtResultCacheLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTableInput">InnodbFtServerStopwordTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeoutInput">InnodbLockWaitTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreadsInput">InnodbLogWriterThreadsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelayInput">InnodbMaxPurgeLagDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagInput">InnodbMaxPurgeLagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePagesInput">InnodbStatsPersistentSamplePagesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePagesInput">InnodbStatsTransientSamplePagesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeoutInput">InteractiveTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfileInput">LocalInfileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRolesInput">MandatoryRolesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacketInput">MaxAllowedPacketInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSizeInput">MaxBinlogCacheSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrorsInput">MaxConnectErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTimeInput">MaxExecutionTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSizeInput">MaxHeapTableSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCountInput">MaxPreparedStmtCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallModeInput">MysqlFirewallModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeoutInput">MysqlxConnectTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevelInput">MysqlxDeflateDefaultCompressionLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevelInput">MysqlxDeflateMaxClientCompressionLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefixInput">MysqlxDocumentIdUniquePrefixInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNoticeInput">MysqlxEnableHelloNoticeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeoutInput">MysqlxIdleWorkerThreadTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeoutInput">MysqlxInteractiveTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevelInput">MysqlxLz4DefaultCompressionLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevelInput">MysqlxLz4MaxClientCompressionLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacketInput">MysqlxMaxAllowedPacketInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreadsInput">MysqlxMinWorkerThreadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeoutInput">MysqlxReadTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeoutInput">MysqlxWaitTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeoutInput">MysqlxWriteTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevelInput">MysqlxZstdDefaultCompressionLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevelInput">MysqlxZstdMaxClientCompressionLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevelInput">MysqlZstdDefaultCompressionLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeoutInput">NetReadTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeoutInput">NetWriteTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSizeInput">ParserMaxMemSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSizeInput">QueryAllocBlockSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSizeInput">QueryPreallocSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimitInput">RegexpTimeLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSizeInput">SortBufferSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlModeInput">SqlModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKeyInput">SqlRequirePrimaryKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarningsInput">SqlWarningsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListenersInput">ThreadPoolDedicatedListenersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimitInput">ThreadPoolMaxTransactionsLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSizeInput">TmpTableSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolationInput">TransactionIsolationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeoutInput">WaitTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommit">Autocommit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTables">BigTables</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds">BinlogExpireLogsSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata">BinlogRowMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions">BinlogRowValueOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression">BinlogTransactionCompression</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionType">CompletionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize">ConnectionMemoryChunkSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit">ConnectionMemoryLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth">CteMaxRecursionDepth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin">DefaultAuthenticationPlugin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks">ForeignKeyChecks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength">GeneratedRandomPasswordLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit">GlobalConnectionMemoryLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking">GlobalConnectionMemoryTracking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency">GroupReplicationConsistency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct">InnodbBufferPoolDumpPct</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances">InnodbBufferPoolInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize">InnodbBufferPoolSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize">InnodbDdlBufferSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads">InnodbDdlThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword">InnodbFtEnableStopword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize">InnodbFtMaxTokenSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize">InnodbFtNumWordOptimize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit">InnodbFtResultCacheLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads">InnodbLogWriterThreads</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag">InnodbMaxPurgeLag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay">InnodbMaxPurgeLagDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages">InnodbStatsPersistentSamplePages</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages">InnodbStatsTransientSamplePages</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfile">LocalInfile</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles">MandatoryRoles</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize">MaxBinlogCacheSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors">MaxConnectErrors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime">MaxExecutionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount">MaxPreparedStmtCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode">MysqlFirewallMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout">MysqlxConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">MysqlxDeflateDefaultCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">MysqlxDeflateMaxClientCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">MysqlxDocumentIdUniquePrefix</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice">MysqlxEnableHelloNotice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">MysqlxIdleWorkerThreadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout">MysqlxInteractiveTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">MysqlxLz4DefaultCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">MysqlxLz4MaxClientCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket">MysqlxMaxAllowedPacket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads">MysqlxMinWorkerThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout">MysqlxReadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout">MysqlxWaitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout">MysqlxWriteTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">MysqlxZstdDefaultCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">MysqlxZstdMaxClientCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">MysqlZstdDefaultCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout">NetReadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize">ParserMaxMemSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize">QueryAllocBlockSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize">QueryPreallocSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit">RegexpTimeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize">SortBufferSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlMode">SqlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings">SqlWarnings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners">ThreadPoolDedicatedListeners</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit">ThreadPoolMaxTransactionsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize">TmpTableSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation">TransactionIsolation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout">WaitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutocommitInput`<sup>Optional</sup> <a name="AutocommitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommitInput"></a>

```go
func AutocommitInput() interface{}
```

- *Type:* interface{}

---

##### `BigTablesInput`<sup>Optional</sup> <a name="BigTablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTablesInput"></a>

```go
func BigTablesInput() interface{}
```

- *Type:* interface{}

---

##### `BinlogExpireLogsSecondsInput`<sup>Optional</sup> <a name="BinlogExpireLogsSecondsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSecondsInput"></a>

```go
func BinlogExpireLogsSecondsInput() *f64
```

- *Type:* *f64

---

##### `BinlogRowMetadataInput`<sup>Optional</sup> <a name="BinlogRowMetadataInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadataInput"></a>

```go
func BinlogRowMetadataInput() *string
```

- *Type:* *string

---

##### `BinlogRowValueOptionsInput`<sup>Optional</sup> <a name="BinlogRowValueOptionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptionsInput"></a>

```go
func BinlogRowValueOptionsInput() *string
```

- *Type:* *string

---

##### `BinlogTransactionCompressionInput`<sup>Optional</sup> <a name="BinlogTransactionCompressionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompressionInput"></a>

```go
func BinlogTransactionCompressionInput() interface{}
```

- *Type:* interface{}

---

##### `CompletionTypeInput`<sup>Optional</sup> <a name="CompletionTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionTypeInput"></a>

```go
func CompletionTypeInput() *string
```

- *Type:* *string

---

##### `ConnectionMemoryChunkSizeInput`<sup>Optional</sup> <a name="ConnectionMemoryChunkSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSizeInput"></a>

```go
func ConnectionMemoryChunkSizeInput() *f64
```

- *Type:* *f64

---

##### `ConnectionMemoryLimitInput`<sup>Optional</sup> <a name="ConnectionMemoryLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimitInput"></a>

```go
func ConnectionMemoryLimitInput() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *f64
```

- *Type:* *f64

---

##### `CteMaxRecursionDepthInput`<sup>Optional</sup> <a name="CteMaxRecursionDepthInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepthInput"></a>

```go
func CteMaxRecursionDepthInput() *string
```

- *Type:* *string

---

##### `DefaultAuthenticationPluginInput`<sup>Optional</sup> <a name="DefaultAuthenticationPluginInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPluginInput"></a>

```go
func DefaultAuthenticationPluginInput() *string
```

- *Type:* *string

---

##### `ForeignKeyChecksInput`<sup>Optional</sup> <a name="ForeignKeyChecksInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecksInput"></a>

```go
func ForeignKeyChecksInput() interface{}
```

- *Type:* interface{}

---

##### `GeneratedRandomPasswordLengthInput`<sup>Optional</sup> <a name="GeneratedRandomPasswordLengthInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLengthInput"></a>

```go
func GeneratedRandomPasswordLengthInput() *f64
```

- *Type:* *f64

---

##### `GlobalConnectionMemoryLimitInput`<sup>Optional</sup> <a name="GlobalConnectionMemoryLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimitInput"></a>

```go
func GlobalConnectionMemoryLimitInput() *string
```

- *Type:* *string

---

##### `GlobalConnectionMemoryTrackingInput`<sup>Optional</sup> <a name="GlobalConnectionMemoryTrackingInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTrackingInput"></a>

```go
func GlobalConnectionMemoryTrackingInput() interface{}
```

- *Type:* interface{}

---

##### `GroupReplicationConsistencyInput`<sup>Optional</sup> <a name="GroupReplicationConsistencyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistencyInput"></a>

```go
func GroupReplicationConsistencyInput() *string
```

- *Type:* *string

---

##### `InformationSchemaStatsExpiryInput`<sup>Optional</sup> <a name="InformationSchemaStatsExpiryInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiryInput"></a>

```go
func InformationSchemaStatsExpiryInput() *f64
```

- *Type:* *f64

---

##### `InnodbBufferPoolDumpPctInput`<sup>Optional</sup> <a name="InnodbBufferPoolDumpPctInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPctInput"></a>

```go
func InnodbBufferPoolDumpPctInput() *f64
```

- *Type:* *f64

---

##### `InnodbBufferPoolInstancesInput`<sup>Optional</sup> <a name="InnodbBufferPoolInstancesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstancesInput"></a>

```go
func InnodbBufferPoolInstancesInput() *f64
```

- *Type:* *f64

---

##### `InnodbBufferPoolSizeInput`<sup>Optional</sup> <a name="InnodbBufferPoolSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSizeInput"></a>

```go
func InnodbBufferPoolSizeInput() *string
```

- *Type:* *string

---

##### `InnodbDdlBufferSizeInput`<sup>Optional</sup> <a name="InnodbDdlBufferSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSizeInput"></a>

```go
func InnodbDdlBufferSizeInput() *string
```

- *Type:* *string

---

##### `InnodbDdlThreadsInput`<sup>Optional</sup> <a name="InnodbDdlThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreadsInput"></a>

```go
func InnodbDdlThreadsInput() *f64
```

- *Type:* *f64

---

##### `InnodbFtEnableStopwordInput`<sup>Optional</sup> <a name="InnodbFtEnableStopwordInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopwordInput"></a>

```go
func InnodbFtEnableStopwordInput() interface{}
```

- *Type:* interface{}

---

##### `InnodbFtMaxTokenSizeInput`<sup>Optional</sup> <a name="InnodbFtMaxTokenSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSizeInput"></a>

```go
func InnodbFtMaxTokenSizeInput() *f64
```

- *Type:* *f64

---

##### `InnodbFtMinTokenSizeInput`<sup>Optional</sup> <a name="InnodbFtMinTokenSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSizeInput"></a>

```go
func InnodbFtMinTokenSizeInput() *f64
```

- *Type:* *f64

---

##### `InnodbFtNumWordOptimizeInput`<sup>Optional</sup> <a name="InnodbFtNumWordOptimizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimizeInput"></a>

```go
func InnodbFtNumWordOptimizeInput() *f64
```

- *Type:* *f64

---

##### `InnodbFtResultCacheLimitInput`<sup>Optional</sup> <a name="InnodbFtResultCacheLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimitInput"></a>

```go
func InnodbFtResultCacheLimitInput() *string
```

- *Type:* *string

---

##### `InnodbFtServerStopwordTableInput`<sup>Optional</sup> <a name="InnodbFtServerStopwordTableInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTableInput"></a>

```go
func InnodbFtServerStopwordTableInput() *string
```

- *Type:* *string

---

##### `InnodbLockWaitTimeoutInput`<sup>Optional</sup> <a name="InnodbLockWaitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeoutInput"></a>

```go
func InnodbLockWaitTimeoutInput() *f64
```

- *Type:* *f64

---

##### `InnodbLogWriterThreadsInput`<sup>Optional</sup> <a name="InnodbLogWriterThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreadsInput"></a>

```go
func InnodbLogWriterThreadsInput() interface{}
```

- *Type:* interface{}

---

##### `InnodbMaxPurgeLagDelayInput`<sup>Optional</sup> <a name="InnodbMaxPurgeLagDelayInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelayInput"></a>

```go
func InnodbMaxPurgeLagDelayInput() *f64
```

- *Type:* *f64

---

##### `InnodbMaxPurgeLagInput`<sup>Optional</sup> <a name="InnodbMaxPurgeLagInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagInput"></a>

```go
func InnodbMaxPurgeLagInput() *string
```

- *Type:* *string

---

##### `InnodbStatsPersistentSamplePagesInput`<sup>Optional</sup> <a name="InnodbStatsPersistentSamplePagesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePagesInput"></a>

```go
func InnodbStatsPersistentSamplePagesInput() *string
```

- *Type:* *string

---

##### `InnodbStatsTransientSamplePagesInput`<sup>Optional</sup> <a name="InnodbStatsTransientSamplePagesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePagesInput"></a>

```go
func InnodbStatsTransientSamplePagesInput() *string
```

- *Type:* *string

---

##### `InteractiveTimeoutInput`<sup>Optional</sup> <a name="InteractiveTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeoutInput"></a>

```go
func InteractiveTimeoutInput() *f64
```

- *Type:* *f64

---

##### `LocalInfileInput`<sup>Optional</sup> <a name="LocalInfileInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfileInput"></a>

```go
func LocalInfileInput() interface{}
```

- *Type:* interface{}

---

##### `MandatoryRolesInput`<sup>Optional</sup> <a name="MandatoryRolesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRolesInput"></a>

```go
func MandatoryRolesInput() *string
```

- *Type:* *string

---

##### `MaxAllowedPacketInput`<sup>Optional</sup> <a name="MaxAllowedPacketInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacketInput"></a>

```go
func MaxAllowedPacketInput() *f64
```

- *Type:* *f64

---

##### `MaxBinlogCacheSizeInput`<sup>Optional</sup> <a name="MaxBinlogCacheSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSizeInput"></a>

```go
func MaxBinlogCacheSizeInput() *string
```

- *Type:* *string

---

##### `MaxConnectErrorsInput`<sup>Optional</sup> <a name="MaxConnectErrorsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrorsInput"></a>

```go
func MaxConnectErrorsInput() *string
```

- *Type:* *string

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectionsInput"></a>

```go
func MaxConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxExecutionTimeInput`<sup>Optional</sup> <a name="MaxExecutionTimeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTimeInput"></a>

```go
func MaxExecutionTimeInput() *string
```

- *Type:* *string

---

##### `MaxHeapTableSizeInput`<sup>Optional</sup> <a name="MaxHeapTableSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSizeInput"></a>

```go
func MaxHeapTableSizeInput() *string
```

- *Type:* *string

---

##### `MaxPreparedStmtCountInput`<sup>Optional</sup> <a name="MaxPreparedStmtCountInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCountInput"></a>

```go
func MaxPreparedStmtCountInput() *f64
```

- *Type:* *f64

---

##### `MysqlFirewallModeInput`<sup>Optional</sup> <a name="MysqlFirewallModeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallModeInput"></a>

```go
func MysqlFirewallModeInput() interface{}
```

- *Type:* interface{}

---

##### `MysqlxConnectTimeoutInput`<sup>Optional</sup> <a name="MysqlxConnectTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeoutInput"></a>

```go
func MysqlxConnectTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MysqlxDeflateDefaultCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxDeflateDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevelInput"></a>

```go
func MysqlxDeflateDefaultCompressionLevelInput() *f64
```

- *Type:* *f64

---

##### `MysqlxDeflateMaxClientCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxDeflateMaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevelInput"></a>

```go
func MysqlxDeflateMaxClientCompressionLevelInput() *f64
```

- *Type:* *f64

---

##### `MysqlxDocumentIdUniquePrefixInput`<sup>Optional</sup> <a name="MysqlxDocumentIdUniquePrefixInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefixInput"></a>

```go
func MysqlxDocumentIdUniquePrefixInput() *f64
```

- *Type:* *f64

---

##### `MysqlxEnableHelloNoticeInput`<sup>Optional</sup> <a name="MysqlxEnableHelloNoticeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNoticeInput"></a>

```go
func MysqlxEnableHelloNoticeInput() interface{}
```

- *Type:* interface{}

---

##### `MysqlxIdleWorkerThreadTimeoutInput`<sup>Optional</sup> <a name="MysqlxIdleWorkerThreadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeoutInput"></a>

```go
func MysqlxIdleWorkerThreadTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MysqlxInteractiveTimeoutInput`<sup>Optional</sup> <a name="MysqlxInteractiveTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeoutInput"></a>

```go
func MysqlxInteractiveTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MysqlxLz4DefaultCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxLz4DefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevelInput"></a>

```go
func MysqlxLz4DefaultCompressionLevelInput() *f64
```

- *Type:* *f64

---

##### `MysqlxLz4MaxClientCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxLz4MaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevelInput"></a>

```go
func MysqlxLz4MaxClientCompressionLevelInput() *f64
```

- *Type:* *f64

---

##### `MysqlxMaxAllowedPacketInput`<sup>Optional</sup> <a name="MysqlxMaxAllowedPacketInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacketInput"></a>

```go
func MysqlxMaxAllowedPacketInput() *f64
```

- *Type:* *f64

---

##### `MysqlxMinWorkerThreadsInput`<sup>Optional</sup> <a name="MysqlxMinWorkerThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreadsInput"></a>

```go
func MysqlxMinWorkerThreadsInput() *f64
```

- *Type:* *f64

---

##### `MysqlxReadTimeoutInput`<sup>Optional</sup> <a name="MysqlxReadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeoutInput"></a>

```go
func MysqlxReadTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MysqlxWaitTimeoutInput`<sup>Optional</sup> <a name="MysqlxWaitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeoutInput"></a>

```go
func MysqlxWaitTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MysqlxWriteTimeoutInput`<sup>Optional</sup> <a name="MysqlxWriteTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeoutInput"></a>

```go
func MysqlxWriteTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MysqlxZstdDefaultCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxZstdDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevelInput"></a>

```go
func MysqlxZstdDefaultCompressionLevelInput() *f64
```

- *Type:* *f64

---

##### `MysqlxZstdMaxClientCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxZstdMaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevelInput"></a>

```go
func MysqlxZstdMaxClientCompressionLevelInput() *f64
```

- *Type:* *f64

---

##### `MysqlZstdDefaultCompressionLevelInput`<sup>Optional</sup> <a name="MysqlZstdDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevelInput"></a>

```go
func MysqlZstdDefaultCompressionLevelInput() *f64
```

- *Type:* *f64

---

##### `NetReadTimeoutInput`<sup>Optional</sup> <a name="NetReadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeoutInput"></a>

```go
func NetReadTimeoutInput() *f64
```

- *Type:* *f64

---

##### `NetWriteTimeoutInput`<sup>Optional</sup> <a name="NetWriteTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeoutInput"></a>

```go
func NetWriteTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ParserMaxMemSizeInput`<sup>Optional</sup> <a name="ParserMaxMemSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSizeInput"></a>

```go
func ParserMaxMemSizeInput() *string
```

- *Type:* *string

---

##### `QueryAllocBlockSizeInput`<sup>Optional</sup> <a name="QueryAllocBlockSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSizeInput"></a>

```go
func QueryAllocBlockSizeInput() *string
```

- *Type:* *string

---

##### `QueryPreallocSizeInput`<sup>Optional</sup> <a name="QueryPreallocSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSizeInput"></a>

```go
func QueryPreallocSizeInput() *string
```

- *Type:* *string

---

##### `RegexpTimeLimitInput`<sup>Optional</sup> <a name="RegexpTimeLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimitInput"></a>

```go
func RegexpTimeLimitInput() *f64
```

- *Type:* *f64

---

##### `SortBufferSizeInput`<sup>Optional</sup> <a name="SortBufferSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSizeInput"></a>

```go
func SortBufferSizeInput() *string
```

- *Type:* *string

---

##### `SqlModeInput`<sup>Optional</sup> <a name="SqlModeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlModeInput"></a>

```go
func SqlModeInput() *string
```

- *Type:* *string

---

##### `SqlRequirePrimaryKeyInput`<sup>Optional</sup> <a name="SqlRequirePrimaryKeyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKeyInput"></a>

```go
func SqlRequirePrimaryKeyInput() interface{}
```

- *Type:* interface{}

---

##### `SqlWarningsInput`<sup>Optional</sup> <a name="SqlWarningsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarningsInput"></a>

```go
func SqlWarningsInput() interface{}
```

- *Type:* interface{}

---

##### `ThreadPoolDedicatedListenersInput`<sup>Optional</sup> <a name="ThreadPoolDedicatedListenersInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListenersInput"></a>

```go
func ThreadPoolDedicatedListenersInput() interface{}
```

- *Type:* interface{}

---

##### `ThreadPoolMaxTransactionsLimitInput`<sup>Optional</sup> <a name="ThreadPoolMaxTransactionsLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimitInput"></a>

```go
func ThreadPoolMaxTransactionsLimitInput() *f64
```

- *Type:* *f64

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `TmpTableSizeInput`<sup>Optional</sup> <a name="TmpTableSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSizeInput"></a>

```go
func TmpTableSizeInput() *string
```

- *Type:* *string

---

##### `TransactionIsolationInput`<sup>Optional</sup> <a name="TransactionIsolationInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolationInput"></a>

```go
func TransactionIsolationInput() *string
```

- *Type:* *string

---

##### `WaitTimeoutInput`<sup>Optional</sup> <a name="WaitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeoutInput"></a>

```go
func WaitTimeoutInput() *f64
```

- *Type:* *f64

---

##### `Autocommit`<sup>Required</sup> <a name="Autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommit"></a>

```go
func Autocommit() interface{}
```

- *Type:* interface{}

---

##### `BigTables`<sup>Required</sup> <a name="BigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTables"></a>

```go
func BigTables() interface{}
```

- *Type:* interface{}

---

##### `BinlogExpireLogsSeconds`<sup>Required</sup> <a name="BinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```go
func BinlogExpireLogsSeconds() *f64
```

- *Type:* *f64

---

##### `BinlogRowMetadata`<sup>Required</sup> <a name="BinlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata"></a>

```go
func BinlogRowMetadata() *string
```

- *Type:* *string

---

##### `BinlogRowValueOptions`<sup>Required</sup> <a name="BinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions"></a>

```go
func BinlogRowValueOptions() *string
```

- *Type:* *string

---

##### `BinlogTransactionCompression`<sup>Required</sup> <a name="BinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression"></a>

```go
func BinlogTransactionCompression() interface{}
```

- *Type:* interface{}

---

##### `CompletionType`<sup>Required</sup> <a name="CompletionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionType"></a>

```go
func CompletionType() *string
```

- *Type:* *string

---

##### `ConnectionMemoryChunkSize`<sup>Required</sup> <a name="ConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```go
func ConnectionMemoryChunkSize() *f64
```

- *Type:* *f64

---

##### `ConnectionMemoryLimit`<sup>Required</sup> <a name="ConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit"></a>

```go
func ConnectionMemoryLimit() *string
```

- *Type:* *string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *f64
```

- *Type:* *f64

---

##### `CteMaxRecursionDepth`<sup>Required</sup> <a name="CteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```go
func CteMaxRecursionDepth() *string
```

- *Type:* *string

---

##### `DefaultAuthenticationPlugin`<sup>Required</sup> <a name="DefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```go
func DefaultAuthenticationPlugin() *string
```

- *Type:* *string

---

##### `ForeignKeyChecks`<sup>Required</sup> <a name="ForeignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks"></a>

```go
func ForeignKeyChecks() interface{}
```

- *Type:* interface{}

---

##### `GeneratedRandomPasswordLength`<sup>Required</sup> <a name="GeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```go
func GeneratedRandomPasswordLength() *f64
```

- *Type:* *f64

---

##### `GlobalConnectionMemoryLimit`<sup>Required</sup> <a name="GlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```go
func GlobalConnectionMemoryLimit() *string
```

- *Type:* *string

---

##### `GlobalConnectionMemoryTracking`<sup>Required</sup> <a name="GlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```go
func GlobalConnectionMemoryTracking() interface{}
```

- *Type:* interface{}

---

##### `GroupReplicationConsistency`<sup>Required</sup> <a name="GroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency"></a>

```go
func GroupReplicationConsistency() *string
```

- *Type:* *string

---

##### `InformationSchemaStatsExpiry`<sup>Required</sup> <a name="InformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```go
func InformationSchemaStatsExpiry() *f64
```

- *Type:* *f64

---

##### `InnodbBufferPoolDumpPct`<sup>Required</sup> <a name="InnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```go
func InnodbBufferPoolDumpPct() *f64
```

- *Type:* *f64

---

##### `InnodbBufferPoolInstances`<sup>Required</sup> <a name="InnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```go
func InnodbBufferPoolInstances() *f64
```

- *Type:* *f64

---

##### `InnodbBufferPoolSize`<sup>Required</sup> <a name="InnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize"></a>

```go
func InnodbBufferPoolSize() *string
```

- *Type:* *string

---

##### `InnodbDdlBufferSize`<sup>Required</sup> <a name="InnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize"></a>

```go
func InnodbDdlBufferSize() *string
```

- *Type:* *string

---

##### `InnodbDdlThreads`<sup>Required</sup> <a name="InnodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads"></a>

```go
func InnodbDdlThreads() *f64
```

- *Type:* *f64

---

##### `InnodbFtEnableStopword`<sup>Required</sup> <a name="InnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword"></a>

```go
func InnodbFtEnableStopword() interface{}
```

- *Type:* interface{}

---

##### `InnodbFtMaxTokenSize`<sup>Required</sup> <a name="InnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```go
func InnodbFtMaxTokenSize() *f64
```

- *Type:* *f64

---

##### `InnodbFtMinTokenSize`<sup>Required</sup> <a name="InnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```go
func InnodbFtMinTokenSize() *f64
```

- *Type:* *f64

---

##### `InnodbFtNumWordOptimize`<sup>Required</sup> <a name="InnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```go
func InnodbFtNumWordOptimize() *f64
```

- *Type:* *f64

---

##### `InnodbFtResultCacheLimit`<sup>Required</sup> <a name="InnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```go
func InnodbFtResultCacheLimit() *string
```

- *Type:* *string

---

##### `InnodbFtServerStopwordTable`<sup>Required</sup> <a name="InnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```go
func InnodbFtServerStopwordTable() *string
```

- *Type:* *string

---

##### `InnodbLockWaitTimeout`<sup>Required</sup> <a name="InnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```go
func InnodbLockWaitTimeout() *f64
```

- *Type:* *f64

---

##### `InnodbLogWriterThreads`<sup>Required</sup> <a name="InnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads"></a>

```go
func InnodbLogWriterThreads() interface{}
```

- *Type:* interface{}

---

##### `InnodbMaxPurgeLag`<sup>Required</sup> <a name="InnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```go
func InnodbMaxPurgeLag() *string
```

- *Type:* *string

---

##### `InnodbMaxPurgeLagDelay`<sup>Required</sup> <a name="InnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```go
func InnodbMaxPurgeLagDelay() *f64
```

- *Type:* *f64

---

##### `InnodbStatsPersistentSamplePages`<sup>Required</sup> <a name="InnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```go
func InnodbStatsPersistentSamplePages() *string
```

- *Type:* *string

---

##### `InnodbStatsTransientSamplePages`<sup>Required</sup> <a name="InnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```go
func InnodbStatsTransientSamplePages() *string
```

- *Type:* *string

---

##### `InteractiveTimeout`<sup>Required</sup> <a name="InteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout"></a>

```go
func InteractiveTimeout() *f64
```

- *Type:* *f64

---

##### `LocalInfile`<sup>Required</sup> <a name="LocalInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfile"></a>

```go
func LocalInfile() interface{}
```

- *Type:* interface{}

---

##### `MandatoryRoles`<sup>Required</sup> <a name="MandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles"></a>

```go
func MandatoryRoles() *string
```

- *Type:* *string

---

##### `MaxAllowedPacket`<sup>Required</sup> <a name="MaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket"></a>

```go
func MaxAllowedPacket() *f64
```

- *Type:* *f64

---

##### `MaxBinlogCacheSize`<sup>Required</sup> <a name="MaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize"></a>

```go
func MaxBinlogCacheSize() *string
```

- *Type:* *string

---

##### `MaxConnectErrors`<sup>Required</sup> <a name="MaxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors"></a>

```go
func MaxConnectErrors() *string
```

- *Type:* *string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxExecutionTime`<sup>Required</sup> <a name="MaxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime"></a>

```go
func MaxExecutionTime() *string
```

- *Type:* *string

---

##### `MaxHeapTableSize`<sup>Required</sup> <a name="MaxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize"></a>

```go
func MaxHeapTableSize() *string
```

- *Type:* *string

---

##### `MaxPreparedStmtCount`<sup>Required</sup> <a name="MaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount"></a>

```go
func MaxPreparedStmtCount() *f64
```

- *Type:* *f64

---

##### `MysqlFirewallMode`<sup>Required</sup> <a name="MysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode"></a>

```go
func MysqlFirewallMode() interface{}
```

- *Type:* interface{}

---

##### `MysqlxConnectTimeout`<sup>Required</sup> <a name="MysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```go
func MysqlxConnectTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxDeflateDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```go
func MysqlxDeflateDefaultCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlxDeflateMaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```go
func MysqlxDeflateMaxClientCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlxDocumentIdUniquePrefix`<sup>Required</sup> <a name="MysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```go
func MysqlxDocumentIdUniquePrefix() *f64
```

- *Type:* *f64

---

##### `MysqlxEnableHelloNotice`<sup>Required</sup> <a name="MysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```go
func MysqlxEnableHelloNotice() interface{}
```

- *Type:* interface{}

---

##### `MysqlxIdleWorkerThreadTimeout`<sup>Required</sup> <a name="MysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```go
func MysqlxIdleWorkerThreadTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxInteractiveTimeout`<sup>Required</sup> <a name="MysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```go
func MysqlxInteractiveTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxLz4DefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```go
func MysqlxLz4DefaultCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlxLz4MaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```go
func MysqlxLz4MaxClientCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlxMaxAllowedPacket`<sup>Required</sup> <a name="MysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```go
func MysqlxMaxAllowedPacket() *f64
```

- *Type:* *f64

---

##### `MysqlxMinWorkerThreads`<sup>Required</sup> <a name="MysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```go
func MysqlxMinWorkerThreads() *f64
```

- *Type:* *f64

---

##### `MysqlxReadTimeout`<sup>Required</sup> <a name="MysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout"></a>

```go
func MysqlxReadTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxWaitTimeout`<sup>Required</sup> <a name="MysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```go
func MysqlxWaitTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxWriteTimeout`<sup>Required</sup> <a name="MysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```go
func MysqlxWriteTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxZstdDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```go
func MysqlxZstdDefaultCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlxZstdMaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```go
func MysqlxZstdMaxClientCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlZstdDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```go
func MysqlZstdDefaultCompressionLevel() *f64
```

- *Type:* *f64

---

##### `NetReadTimeout`<sup>Required</sup> <a name="NetReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout"></a>

```go
func NetReadTimeout() *f64
```

- *Type:* *f64

---

##### `NetWriteTimeout`<sup>Required</sup> <a name="NetWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout"></a>

```go
func NetWriteTimeout() *f64
```

- *Type:* *f64

---

##### `ParserMaxMemSize`<sup>Required</sup> <a name="ParserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize"></a>

```go
func ParserMaxMemSize() *string
```

- *Type:* *string

---

##### `QueryAllocBlockSize`<sup>Required</sup> <a name="QueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize"></a>

```go
func QueryAllocBlockSize() *string
```

- *Type:* *string

---

##### `QueryPreallocSize`<sup>Required</sup> <a name="QueryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize"></a>

```go
func QueryPreallocSize() *string
```

- *Type:* *string

---

##### `RegexpTimeLimit`<sup>Required</sup> <a name="RegexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit"></a>

```go
func RegexpTimeLimit() *f64
```

- *Type:* *f64

---

##### `SortBufferSize`<sup>Required</sup> <a name="SortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize"></a>

```go
func SortBufferSize() *string
```

- *Type:* *string

---

##### `SqlMode`<sup>Required</sup> <a name="SqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlMode"></a>

```go
func SqlMode() *string
```

- *Type:* *string

---

##### `SqlRequirePrimaryKey`<sup>Required</sup> <a name="SqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```go
func SqlRequirePrimaryKey() interface{}
```

- *Type:* interface{}

---

##### `SqlWarnings`<sup>Required</sup> <a name="SqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings"></a>

```go
func SqlWarnings() interface{}
```

- *Type:* interface{}

---

##### `ThreadPoolDedicatedListeners`<sup>Required</sup> <a name="ThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```go
func ThreadPoolDedicatedListeners() interface{}
```

- *Type:* interface{}

---

##### `ThreadPoolMaxTransactionsLimit`<sup>Required</sup> <a name="ThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```go
func ThreadPoolMaxTransactionsLimit() *f64
```

- *Type:* *f64

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `TmpTableSize`<sup>Required</sup> <a name="TmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize"></a>

```go
func TmpTableSize() *string
```

- *Type:* *string

---

##### `TransactionIsolation`<sup>Required</sup> <a name="TransactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation"></a>

```go
func TransactionIsolation() *string
```

- *Type:* *string

---

##### `WaitTimeout`<sup>Required</sup> <a name="WaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout"></a>

```go
func WaitTimeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() MysqlMysqlConfigurationVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---




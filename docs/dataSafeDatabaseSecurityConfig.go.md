# `dataSafeDatabaseSecurityConfig` Submodule <a name="`dataSafeDatabaseSecurityConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDatabaseSecurityConfig <a name="DataSafeDatabaseSecurityConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config oci_data_safe_database_security_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfig"

datasafedatabasesecurityconfig.NewDataSafeDatabaseSecurityConfig(scope Construct, id *string, config DataSafeDatabaseSecurityConfigConfig) DataSafeDatabaseSecurityConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig">DataSafeDatabaseSecurityConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig">DataSafeDatabaseSecurityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putSqlFirewallConfig">PutSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetRefreshTrigger">ResetRefreshTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetSqlFirewallConfig">ResetSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSqlFirewallConfig` <a name="PutSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putSqlFirewallConfig"></a>

```go
func PutSqlFirewallConfig(value DataSafeDatabaseSecurityConfigSqlFirewallConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putSqlFirewallConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeDatabaseSecurityConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetRefreshTrigger` <a name="ResetRefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetRefreshTrigger"></a>

```go
func ResetRefreshTrigger()
```

##### `ResetSqlFirewallConfig` <a name="ResetSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetSqlFirewallConfig"></a>

```go
func ResetSqlFirewallConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfig"

datasafedatabasesecurityconfig.DataSafeDatabaseSecurityConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfig"

datasafedatabasesecurityconfig.DataSafeDatabaseSecurityConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfig"

datasafedatabasesecurityconfig.DataSafeDatabaseSecurityConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfig"

datasafedatabasesecurityconfig.DataSafeDatabaseSecurityConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeDatabaseSecurityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeDatabaseSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDatabaseSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfig">SqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference">DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeLastRefreshed">TimeLastRefreshed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference">DataSafeDatabaseSecurityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput">DatabaseSecurityConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTriggerInput">RefreshTriggerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfigInput">SqlFirewallConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId">DatabaseSecurityConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTrigger">RefreshTrigger</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SqlFirewallConfig`<sup>Required</sup> <a name="SqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfig"></a>

```go
func SqlFirewallConfig() DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference">DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastRefreshed`<sup>Required</sup> <a name="TimeLastRefreshed" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeLastRefreshed"></a>

```go
func TimeLastRefreshed() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeouts"></a>

```go
func Timeouts() DataSafeDatabaseSecurityConfigTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference">DataSafeDatabaseSecurityConfigTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DatabaseSecurityConfigIdInput`<sup>Optional</sup> <a name="DatabaseSecurityConfigIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput"></a>

```go
func DatabaseSecurityConfigIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RefreshTriggerInput`<sup>Optional</sup> <a name="RefreshTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTriggerInput"></a>

```go
func RefreshTriggerInput() *f64
```

- *Type:* *f64

---

##### `SqlFirewallConfigInput`<sup>Optional</sup> <a name="SqlFirewallConfigInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfigInput"></a>

```go
func SqlFirewallConfigInput() DataSafeDatabaseSecurityConfigSqlFirewallConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseSecurityConfigId`<sup>Required</sup> <a name="DatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId"></a>

```go
func DatabaseSecurityConfigId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RefreshTrigger`<sup>Required</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTrigger"></a>

```go
func RefreshTrigger() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDatabaseSecurityConfigConfig <a name="DataSafeDatabaseSecurityConfigConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfig"

&datasafedatabasesecurityconfig.DataSafeDatabaseSecurityConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseSecurityConfigId: *string,
	CompartmentId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	RefreshTrigger: *f64,
	SqlFirewallConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId">DatabaseSecurityConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#database_security_config_id DataSafeDatabaseSecurityConfig#database_security_config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#compartment_id DataSafeDatabaseSecurityConfig#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#defined_tags DataSafeDatabaseSecurityConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#description DataSafeDatabaseSecurityConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#display_name DataSafeDatabaseSecurityConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#freeform_tags DataSafeDatabaseSecurityConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#id DataSafeDatabaseSecurityConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.refreshTrigger">RefreshTrigger</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#refresh_trigger DataSafeDatabaseSecurityConfig#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.sqlFirewallConfig">SqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | sql_firewall_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseSecurityConfigId`<sup>Required</sup> <a name="DatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId"></a>

```go
DatabaseSecurityConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#database_security_config_id DataSafeDatabaseSecurityConfig#database_security_config_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#compartment_id DataSafeDatabaseSecurityConfig#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#defined_tags DataSafeDatabaseSecurityConfig#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#description DataSafeDatabaseSecurityConfig#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#display_name DataSafeDatabaseSecurityConfig#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#freeform_tags DataSafeDatabaseSecurityConfig#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#id DataSafeDatabaseSecurityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshTrigger`<sup>Optional</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.refreshTrigger"></a>

```go
RefreshTrigger *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#refresh_trigger DataSafeDatabaseSecurityConfig#refresh_trigger}.

---

##### `SqlFirewallConfig`<sup>Optional</sup> <a name="SqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.sqlFirewallConfig"></a>

```go
SqlFirewallConfig DataSafeDatabaseSecurityConfigSqlFirewallConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

sql_firewall_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#sql_firewall_config DataSafeDatabaseSecurityConfig#sql_firewall_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.timeouts"></a>

```go
Timeouts DataSafeDatabaseSecurityConfigTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#timeouts DataSafeDatabaseSecurityConfig#timeouts}

---

### DataSafeDatabaseSecurityConfigSqlFirewallConfig <a name="DataSafeDatabaseSecurityConfigSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfig"

&datasafedatabasesecurityconfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig {
	ExcludeJob: *string,
	Status: *string,
	ViolationLogAutoPurge: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.excludeJob">ExcludeJob</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#exclude_job DataSafeDatabaseSecurityConfig#exclude_job}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#status DataSafeDatabaseSecurityConfig#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.violationLogAutoPurge">ViolationLogAutoPurge</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#violation_log_auto_purge DataSafeDatabaseSecurityConfig#violation_log_auto_purge}. |

---

##### `ExcludeJob`<sup>Optional</sup> <a name="ExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.excludeJob"></a>

```go
ExcludeJob *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#exclude_job DataSafeDatabaseSecurityConfig#exclude_job}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#status DataSafeDatabaseSecurityConfig#status}.

---

##### `ViolationLogAutoPurge`<sup>Optional</sup> <a name="ViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.violationLogAutoPurge"></a>

```go
ViolationLogAutoPurge *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#violation_log_auto_purge DataSafeDatabaseSecurityConfig#violation_log_auto_purge}.

---

### DataSafeDatabaseSecurityConfigTimeouts <a name="DataSafeDatabaseSecurityConfigTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfig"

&datasafedatabasesecurityconfig.DataSafeDatabaseSecurityConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#create DataSafeDatabaseSecurityConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#delete DataSafeDatabaseSecurityConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#update DataSafeDatabaseSecurityConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#create DataSafeDatabaseSecurityConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#delete DataSafeDatabaseSecurityConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#update DataSafeDatabaseSecurityConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference <a name="DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfig"

datasafedatabasesecurityconfig.NewDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetExcludeJob">ResetExcludeJob</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetViolationLogAutoPurge">ResetViolationLogAutoPurge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeJob` <a name="ResetExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetExcludeJob"></a>

```go
func ResetExcludeJob()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetViolationLogAutoPurge` <a name="ResetViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetViolationLogAutoPurge"></a>

```go
func ResetViolationLogAutoPurge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJobInput">ExcludeJobInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurgeInput">ViolationLogAutoPurgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob">ExcludeJob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge">ViolationLogAutoPurge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```go
func TimeStatusUpdated() *string
```

- *Type:* *string

---

##### `ExcludeJobInput`<sup>Optional</sup> <a name="ExcludeJobInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJobInput"></a>

```go
func ExcludeJobInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `ViolationLogAutoPurgeInput`<sup>Optional</sup> <a name="ViolationLogAutoPurgeInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurgeInput"></a>

```go
func ViolationLogAutoPurgeInput() *string
```

- *Type:* *string

---

##### `ExcludeJob`<sup>Required</sup> <a name="ExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob"></a>

```go
func ExcludeJob() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ViolationLogAutoPurge`<sup>Required</sup> <a name="ViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```go
func ViolationLogAutoPurge() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeDatabaseSecurityConfigSqlFirewallConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---


### DataSafeDatabaseSecurityConfigTimeoutsOutputReference <a name="DataSafeDatabaseSecurityConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfig"

datasafedatabasesecurityconfig.NewDataSafeDatabaseSecurityConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeDatabaseSecurityConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




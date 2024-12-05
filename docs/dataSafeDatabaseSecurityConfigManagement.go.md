# `dataSafeDatabaseSecurityConfigManagement` Submodule <a name="`dataSafeDatabaseSecurityConfigManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDatabaseSecurityConfigManagement <a name="DataSafeDatabaseSecurityConfigManagement" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management oci_data_safe_database_security_config_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfigmanagement"

datasafedatabasesecurityconfigmanagement.NewDataSafeDatabaseSecurityConfigManagement(scope Construct, id *string, config DataSafeDatabaseSecurityConfigManagementConfig) DataSafeDatabaseSecurityConfigManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig">DataSafeDatabaseSecurityConfigManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig">DataSafeDatabaseSecurityConfigManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putSqlFirewallConfig">PutSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetRefreshTrigger">ResetRefreshTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetSqlFirewallConfig">ResetSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSqlFirewallConfig` <a name="PutSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putSqlFirewallConfig"></a>

```go
func PutSqlFirewallConfig(value DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putSqlFirewallConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeDatabaseSecurityConfigManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts">DataSafeDatabaseSecurityConfigManagementTimeouts</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetRefreshTrigger` <a name="ResetRefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetRefreshTrigger"></a>

```go
func ResetRefreshTrigger()
```

##### `ResetSqlFirewallConfig` <a name="ResetSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetSqlFirewallConfig"></a>

```go
func ResetSqlFirewallConfig()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetTargetId"></a>

```go
func ResetTargetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeDatabaseSecurityConfigManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfigmanagement"

datasafedatabasesecurityconfigmanagement.DataSafeDatabaseSecurityConfigManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfigmanagement"

datasafedatabasesecurityconfigmanagement.DataSafeDatabaseSecurityConfigManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfigmanagement"

datasafedatabasesecurityconfigmanagement.DataSafeDatabaseSecurityConfigManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfigmanagement"

datasafedatabasesecurityconfigmanagement.DataSafeDatabaseSecurityConfigManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeDatabaseSecurityConfigManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeDatabaseSecurityConfigManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeDatabaseSecurityConfigManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDatabaseSecurityConfigManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.sqlFirewallConfig">SqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeLastRefreshed">TimeLastRefreshed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference">DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.refreshTriggerInput">RefreshTriggerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.sqlFirewallConfigInput">SqlFirewallConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.refreshTrigger">RefreshTrigger</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SqlFirewallConfig`<sup>Required</sup> <a name="SqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.sqlFirewallConfig"></a>

```go
func SqlFirewallConfig() DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastRefreshed`<sup>Required</sup> <a name="TimeLastRefreshed" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeLastRefreshed"></a>

```go
func TimeLastRefreshed() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeouts"></a>

```go
func Timeouts() DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference">DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RefreshTriggerInput`<sup>Optional</sup> <a name="RefreshTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.refreshTriggerInput"></a>

```go
func RefreshTriggerInput() interface{}
```

- *Type:* interface{}

---

##### `SqlFirewallConfigInput`<sup>Optional</sup> <a name="SqlFirewallConfigInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.sqlFirewallConfigInput"></a>

```go
func SqlFirewallConfigInput() DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a>

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RefreshTrigger`<sup>Required</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.refreshTrigger"></a>

```go
func RefreshTrigger() interface{}
```

- *Type:* interface{}

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDatabaseSecurityConfigManagementConfig <a name="DataSafeDatabaseSecurityConfigManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfigmanagement"

&datasafedatabasesecurityconfigmanagement.DataSafeDatabaseSecurityConfigManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	RefreshTrigger: interface{},
	SqlFirewallConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig,
	TargetId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#compartment_id DataSafeDatabaseSecurityConfigManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#defined_tags DataSafeDatabaseSecurityConfigManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#description DataSafeDatabaseSecurityConfigManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#display_name DataSafeDatabaseSecurityConfigManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#freeform_tags DataSafeDatabaseSecurityConfigManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#id DataSafeDatabaseSecurityConfigManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.refreshTrigger">RefreshTrigger</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#refresh_trigger DataSafeDatabaseSecurityConfigManagement#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.sqlFirewallConfig">SqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a></code> | sql_firewall_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#target_id DataSafeDatabaseSecurityConfigManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts">DataSafeDatabaseSecurityConfigManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#compartment_id DataSafeDatabaseSecurityConfigManagement#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#defined_tags DataSafeDatabaseSecurityConfigManagement#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#description DataSafeDatabaseSecurityConfigManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#display_name DataSafeDatabaseSecurityConfigManagement#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#freeform_tags DataSafeDatabaseSecurityConfigManagement#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#id DataSafeDatabaseSecurityConfigManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshTrigger`<sup>Optional</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.refreshTrigger"></a>

```go
RefreshTrigger interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#refresh_trigger DataSafeDatabaseSecurityConfigManagement#refresh_trigger}.

---

##### `SqlFirewallConfig`<sup>Optional</sup> <a name="SqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.sqlFirewallConfig"></a>

```go
SqlFirewallConfig DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a>

sql_firewall_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#sql_firewall_config DataSafeDatabaseSecurityConfigManagement#sql_firewall_config}

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#target_id DataSafeDatabaseSecurityConfigManagement#target_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.timeouts"></a>

```go
Timeouts DataSafeDatabaseSecurityConfigManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts">DataSafeDatabaseSecurityConfigManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#timeouts DataSafeDatabaseSecurityConfigManagement#timeouts}

---

### DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig <a name="DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfigmanagement"

&datasafedatabasesecurityconfigmanagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig {
	ExcludeJob: *string,
	Status: *string,
	ViolationLogAutoPurge: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.excludeJob">ExcludeJob</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#exclude_job DataSafeDatabaseSecurityConfigManagement#exclude_job}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#status DataSafeDatabaseSecurityConfigManagement#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.violationLogAutoPurge">ViolationLogAutoPurge</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#violation_log_auto_purge DataSafeDatabaseSecurityConfigManagement#violation_log_auto_purge}. |

---

##### `ExcludeJob`<sup>Optional</sup> <a name="ExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.excludeJob"></a>

```go
ExcludeJob *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#exclude_job DataSafeDatabaseSecurityConfigManagement#exclude_job}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#status DataSafeDatabaseSecurityConfigManagement#status}.

---

##### `ViolationLogAutoPurge`<sup>Optional</sup> <a name="ViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.violationLogAutoPurge"></a>

```go
ViolationLogAutoPurge *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#violation_log_auto_purge DataSafeDatabaseSecurityConfigManagement#violation_log_auto_purge}.

---

### DataSafeDatabaseSecurityConfigManagementTimeouts <a name="DataSafeDatabaseSecurityConfigManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfigmanagement"

&datasafedatabasesecurityconfigmanagement.DataSafeDatabaseSecurityConfigManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#create DataSafeDatabaseSecurityConfigManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#delete DataSafeDatabaseSecurityConfigManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#update DataSafeDatabaseSecurityConfigManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#create DataSafeDatabaseSecurityConfigManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#delete DataSafeDatabaseSecurityConfigManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#update DataSafeDatabaseSecurityConfigManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference <a name="DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfigmanagement"

datasafedatabasesecurityconfigmanagement.NewDataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetExcludeJob">ResetExcludeJob</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetViolationLogAutoPurge">ResetViolationLogAutoPurge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeJob` <a name="ResetExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetExcludeJob"></a>

```go
func ResetExcludeJob()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetViolationLogAutoPurge` <a name="ResetViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetViolationLogAutoPurge"></a>

```go
func ResetViolationLogAutoPurge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.excludeJobInput">ExcludeJobInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.violationLogAutoPurgeInput">ViolationLogAutoPurgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.excludeJob">ExcludeJob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.violationLogAutoPurge">ViolationLogAutoPurge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```go
func TimeStatusUpdated() *string
```

- *Type:* *string

---

##### `ExcludeJobInput`<sup>Optional</sup> <a name="ExcludeJobInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.excludeJobInput"></a>

```go
func ExcludeJobInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `ViolationLogAutoPurgeInput`<sup>Optional</sup> <a name="ViolationLogAutoPurgeInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.violationLogAutoPurgeInput"></a>

```go
func ViolationLogAutoPurgeInput() *string
```

- *Type:* *string

---

##### `ExcludeJob`<sup>Required</sup> <a name="ExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.excludeJob"></a>

```go
func ExcludeJob() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ViolationLogAutoPurge`<sup>Required</sup> <a name="ViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```go
func ViolationLogAutoPurge() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a>

---


### DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference <a name="DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafedatabasesecurityconfigmanagement"

datasafedatabasesecurityconfigmanagement.NewDataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



